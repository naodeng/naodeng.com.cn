from PIL import Image, ImageOps
import sys
from pathlib import Path
# python scripts/compose_logo.py artwork.png output.png wide|16x9
root=Path(__file__).resolve().parents[1]
ratio=sys.argv[3]; w,h,d,x,y=(1880,800,96,1690,656) if ratio=='wide' else (1920,1080,130,1694,885)
source=Image.open(sys.argv[1]).convert('RGB'); image=ImageOps.pad(source,(w,h),method=Image.Resampling.LANCZOS,color='#F7F1E7').convert('RGBA')
logo=Image.open(root/'brand-assets'/f'logo-{d}px.png').convert('RGBA'); image.alpha_composite(logo,(x,y)); image.convert('RGB').save(sys.argv[2]); check=Image.open(sys.argv[2]); check.load(); assert check.size==(w,h); assert all(check.getpixel((x+i,y+j))==logo.getpixel((i,j))[:3] for j in range(d) for i in range(d) if logo.getpixel((i,j))[3]==255)
print('File and opaque logo pixels verified. Visual clearance, title and identity still require review.')
