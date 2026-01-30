
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Recursive function to find files
function getFiles(dir, allFiles = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, allFiles);
        } else if (file.endsWith('.mdx')) {
            allFiles.push(name);
        }
    }
    return allFiles;
}

// Function to extract frontmatter title
function getTitle(content) {
    const match = content.match(/^title:\s*"(.+)"/m) || content.match(/^title:\s*(.+)/m);
    return match ? match[1].replace(/^"|"$/g, '').trim() : null;
}

// Function to extract tags
function getTags(content) {
    // Match tags: ["tag1", "tag2"] or tags: [tag1, tag2]
    const match = content.match(/^tags:\s*\[(.*?)\]/m);
    if (!match) return [];

    // Split by comma, remove quotes and whitespace
    return match[1].split(',')
        .map(t => t.trim().replace(/^"|"$|^'|'$/g, ''))
        .filter(t => t.length > 0);
}

// Helper to calculate visual width: East Asian = 2, others = 1
function getVisualType(char) {
    if (
        (char >= '\u1100' && char <= '\u11FF') ||
        (char >= '\u2E80' && char <= '\u9FFF') ||
        (char >= '\uAC00' && char <= '\uD7AF') ||
        (char >= '\uF900' && char <= '\uFAFF') ||
        (char >= '\uFE10' && char <= '\uFE19') ||
        (char >= '\uFE30' && char <= '\uFE6F') ||
        (char >= '\uFF00' && char <= '\uFF60') ||
        (char >= '\uFFE0' && char <= '\uFFE6')
    ) {
        return 2;
    }
    return 1;
}

// Even better wrapping that respects English word boundaries
function wrapTextSmart(text) {
    if (!text) return [];

    const MAX_VISUAL_WIDTH = 18;
    const lines = [];

    const tokens = [];
    let currentToken = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const isSpace = /\s/.test(char);
        const width = getVisualType(char);
        const isWide = width === 2;

        if (isWide) {
            if (currentToken) {
                tokens.push({ text: currentToken, width: currentToken.length });
                currentToken = "";
            }
            tokens.push({ text: char, width: 2 });
        } else if (isSpace) {
            if (currentToken) {
                tokens.push({ text: currentToken, width: currentToken.length });
                currentToken = "";
            }
            tokens.push({ text: char, width: 1 });
        } else {
            currentToken += char;
        }
    }
    if (currentToken) {
        tokens.push({ text: currentToken, width: currentToken.length });
    }

    let currentLine = "";
    let currentWidth = 0;

    for (const token of tokens) {
        if (currentWidth + token.width > MAX_VISUAL_WIDTH) {
            if (currentLine.length > 0) {
                lines.push(currentLine.trim());
                currentLine = token.text.trimStart();
                currentWidth = token.width;
            } else {
                lines.push(token.text);
                currentLine = "";
                currentWidth = 0;
            }
        } else {
            currentLine += token.text;
            currentWidth += token.width;
        }
    }
    if (currentLine) lines.push(currentLine.trim());
    return lines;
}

async function generateCover(title, tags, outputPath) {
    const width = 1200;
    const height = 630;

    const lines = wrapTextSmart(title);

    // Dynamic font size
    let fontSize = 60;
    if (lines.length === 3) fontSize = 55;
    else if (lines.length === 4) fontSize = 50;
    else if (lines.length === 5) fontSize = 42;
    else if (lines.length >= 6) fontSize = 36;

    const lineHeight = fontSize * 1.35;

    // Shift text UP slightly to make room for tags
    const textCenterYShift = tags.length > 0 ? -30 : 0;

    const tspanElements = lines.map((line, index) => {
        const totalTextHeight = lines.length * lineHeight;
        const startY = (height - totalTextHeight) / 2 + (fontSize * 0.35) + textCenterYShift;
        const y = startY + (index * lineHeight);

        const escapedLine = line.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
        return `<tspan x="50%" y="${y}">${escapedLine}</tspan>`;
    }).join('');

    let tagElements = '';
    if (tags && tags.length > 0) {
        const firstTag = tags[0];
        const tagFontSize = 28;
        const tagPaddingX = 24;
        const tagPaddingY = 12;

        let w = 0;
        for (let i = 0; i < firstTag.length; i++) {
            w += getVisualType(firstTag[i]) === 2 ? tagFontSize : tagFontSize * 0.6;
        }
        w += (tagPaddingX * 2);

        const x = (width - w) / 2;
        const tagY = height - 120;

        const escapedTag = firstTag.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        tagElements = `
            <g>
                <rect x="${x}" y="${tagY}" width="${w}" height="${tagFontSize + tagPaddingY * 2}" rx="8" fill="none" stroke="#f97316" stroke-width="2" />
                <text x="${x + w / 2}" y="${tagY + tagFontSize + 5}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${tagFontSize}" fill="#f97316" font-weight="bold">${escapedTag}</text>
            </g>
        `;
    }

    const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGradient)"/>
      <rect x="60" y="60" width="1080" height="510" fill="none" stroke="#f97316" stroke-width="4" rx="20" opacity="0.6"/>
      <text x="50%" text-anchor="middle" font-family="Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif" font-size="${fontSize}" font-weight="bold" fill="#ffffff">
        ${tspanElements}
      </text>
      ${tagElements}
    </svg>
    `;

    try {
        await sharp(Buffer.from(svg)).png().toFile(outputPath);
    } catch (e) {
        console.error(`Failed to generate cover for ${title}:`, e);
    }
}

async function main() {
    console.log("Starting Standardized Cleanup and Generation...");
    const blogDir = path.join(process.cwd(), 'src', 'blog');
    const files = getFiles(blogDir);
    console.log(`Found ${files.length} MDX files to process.`);

    let count = 0;
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        const title = getTitle(content);
        if (!title) continue;

        const tags = getTags(content);
        const dir = path.dirname(file);
        const baseName = path.basename(file, '.mdx');

        // 1. Expected Standard Path
        const standardCoverName = `${baseName}-cover.png`;
        const standardCoverPath = path.join(dir, standardCoverName);
        const desiredReference = `./${standardCoverName}`;

        // 2. PURGE legacy variations
        const dirFiles = fs.readdirSync(dir);
        for (const f of dirFiles) {
            if (f.startsWith(baseName) && (f.endsWith('-fixed.png') || f.endsWith('-tags.png'))) {
                console.log(`\n  Removing legacy file: ${f}`);
                fs.unlinkSync(path.join(dir, f));
            }
        }

        // 3. Update Frontmatter (Global regex replace to be absolutely sure)
        // Match cover: "./..." or cover: "./..." 
        // We replace any "cover: " line with our desired standardized path
        if (content.match(/^cover:\s*.+/m)) {
            content = content.replace(/^cover:\s*.+/m, `cover: "${desiredReference}"`);
        } else {
            // If no cover field, add it after author
            content = content.replace(/^author:\s*.+/m, (match) => `${match}\ncover: "${desiredReference}"`);
        }
        fs.writeFileSync(file, content);

        // 4. Generate the Standard Image
        await generateCover(title, tags, standardCoverPath);

        process.stdout.write(`.`);
        count++;
    }
    console.log(`\nSuccessfully standardized ${count} covers and cleaned up legacy files.`);
}

main();
