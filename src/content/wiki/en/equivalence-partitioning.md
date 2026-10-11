---
title: "Equivalence Partitioning"
description: "Equivalence Partitioning is a software testing technique used to reduce the number of test cases by dividing the input data of a software unit into partitions of equivalent data."
section: "E"
related:
  - "boundary-testing"
  - "test-case"
  - "black-box-testing"
  - "test-case-management"
  - "automated-testing"
order: 0
---
# Equivalence Partitioning

<!-- TOC START -->

- [Equivalence Partitioning](#equivalence-partitioning)
  - [Questions about Equivalence Partitioning?](#questions-about-equivalence-partitioning)
    - [Basics and Importance](#basics-and-importance)
      - [What is equivalence partitioning in software testing?](#what-is-equivalence-partitioning-in-software-testing)
      - [Why is equivalence partitioning important in software testing?](#why-is-equivalence-partitioning-important-in-software-testing)
      - [What are the key benefits of using equivalence partitioning?](#what-are-the-key-benefits-of-using-equivalence-partitioning)
      - [How does equivalence partitioning contribute to the efficiency of testing?](#how-does-equivalence-partitioning-contribute-to-the-efficiency-of-testing)
    - [Implementation](#implementation)
      - [How is equivalence partitioning implemented in software testing?](#how-is-equivalence-partitioning-implemented-in-software-testing)
      - [What are the steps involved in equivalence partitioning?](#what-are-the-steps-involved-in-equivalence-partitioning)
      - [What are some examples of equivalence partitioning?](#what-are-some-examples-of-equivalence-partitioning)
      - [How can equivalence partitioning be used in combination with other testing techniques?](#how-can-equivalence-partitioning-be-used-in-combination-with-other-testing-techniques)
    - [Challenges and Solutions](#challenges-and-solutions)
      - [What are the common challenges encountered while implementing equivalence partitioning?](#what-are-the-common-challenges-encountered-while-implementing-equivalence-partitioning)
      - [How can these challenges be overcome?](#how-can-these-challenges-be-overcome)
      - [What are some best practices for implementing equivalence partitioning effectively?](#what-are-some-best-practices-for-implementing-equivalence-partitioning-effectively)
      - [How can equivalence partitioning be used to handle edge cases in software testing?](#how-can-equivalence-partitioning-be-used-to-handle-edge-cases-in-software-testing)
    - [Advanced Concepts](#advanced-concepts)
      - [What is the role of equivalence partitioning in end-to-end testing?](#what-is-the-role-of-equivalence-partitioning-in-end-to-end-testing)
      - [How does equivalence partitioning help in reducing the number of test cases?](#how-does-equivalence-partitioning-help-in-reducing-the-number-of-test-cases)
      - [How can equivalence partitioning be applied in real-world scenarios?](#how-can-equivalence-partitioning-be-applied-in-real-world-scenarios)
      - [What is the relationship between equivalence partitioning and boundary value analysis?](#what-is-the-relationship-between-equivalence-partitioning-and-boundary-value-analysis)
<!-- TOC END -->

Equivalence Partitioning is a software testing technique used to reduce the number of test cases by dividing the input data of a software unit into partitions of equivalent data. Instead of testing every possible input, equivalence partitioning proposes that test cases can be designed for representative values from each partition. The underlying principle is that if the software behaves correctly for one value in a partition, it will behave correctly for all other values in the same partition, and vice versa.

## Questions about Equivalence Partitioning?

### Basics and Importance

#### What is equivalence partitioning in software testing?

  Equivalence Partitioning is a **[black box testing](/en/wiki/black-box-testing/)** method that divides input data of a software unit into partitions of equivalent data from which [test cases](/en/wiki/test-case/) can be derived. In this technique, [test cases](/en/wiki/test-case/) are designed to cover each partition at least once. This method assumes that all the values from one partition will be treated similarly by the system. If a condition holds true for one scenario in a partition, it is assumed to be true for all other scenarios in that partition.
  To apply equivalence partitioning, you first identify input data that influences the execution of the test object. Then, you divide this data into equivalence partitions or sets where the program should behave identically for each member of the partition. Typically, you would create one [test case](/en/wiki/test-case/) for each partition.
  For example, if an input accepts a range of values between 1 and 10, you would create three partitions: one for values below the range, one for values within the range, and one for values above the range. You would then select one representative value from each partition for testing.
  Equivalence partitioning is often used alongside **boundary value analysis**, where [test cases](/en/wiki/test-case/) are designed to include values at the boundaries of partitions. It is also combined with other testing techniques, such as **[decision table testing](/en/wiki/decision-table-testing/)** or **[state transition testing](/en/wiki/state-transition-testing/)**, to ensure comprehensive coverage of the test space.

  ```
  // Example of a simple equivalence partitioning test case in TypeScript
  function testInputValue(input: number): string {
    if (input >= 1 && input <= 10) {
      return 'Valid input';
    } else {
      return 'Invalid input';
    }
  }
  // Equivalence partitions: <1, 1-10, >10
  // Test cases for each partition
  console.assert(testInputValue(0) === 'Invalid input');
  console.assert(testInputValue(5) === 'Valid input');
  console.assert(testInputValue(11) === 'Invalid input');
  ```
  By focusing on representative values, equivalence partitioning helps to reduce the number of [test cases](/en/wiki/test-case/), saving time and resources while still ensuring thorough testing.

#### Why is equivalence partitioning important in software testing?

  Equivalence partitioning is crucial in [software testing](/en/wiki/software-testing/) as it ensures **comprehensive coverage** of the application's functionality without the need for an excessive number of [test cases](/en/wiki/test-case/). By dividing input data into **equivalent classes** where each partition is expected to be treated the same by the software, testers can select a **representative value** from each partition for testing. This approach targets the identification of **defects** efficiently, as one defect in a partition likely indicates more within that same class.
  Moreover, equivalence partitioning helps in **identifying ambiguous requirements** by forcing the tester to question how the system should handle different input classes. It also supports the creation of more **focused and effective [test cases](/en/wiki/test-case/)**, as it eliminates redundancy and increases the likelihood of catching errors that are representative of their respective classes.
  In practice, equivalence partitioning is often used alongside **boundary value analysis**, which tests the edges of each partition. This combination is particularly powerful in catching a high number of potential [bugs](/en/wiki/bug/) with a **minimal set of [test cases](/en/wiki/test-case/)**. It's a strategic method that aligns with the **[risk-based testing](/en/wiki/risk-based-testing/)** approach, prioritizing the most critical areas of the application that could affect the user experience.
  By reducing the [test suite](/en/wiki/test-suite/) size while maintaining coverage, equivalence partitioning not only saves time but also **optimizes resource allocation**, making it a key technique in the arsenal of [test automation](/en/wiki/test-automation/) engineers aiming for efficient and effective testing processes.

#### What are the key benefits of using equivalence partitioning?

  Equivalence partitioning offers several key benefits:

  - **Reduces [test cases](/en/wiki/test-case/)** : By grouping inputs into classes that are treated the same by the system, it minimizes the number of test cases needed while still ensuring thorough coverage.
  - **Increases [test coverage](/en/wiki/test-coverage/)** : It ensures that all possible input classes are considered, which can lead to the discovery of defects that might be missed with ad-hoc testing.
  - **Saves time and resources** : With fewer test cases, testing is faster and less resource-intensive, allowing for more efficient allocation of testing efforts.
  - **Simplifies test design** : By focusing on representative values, test case design becomes more straightforward and manageable.
  - **Facilitates identification of defects** : Since inputs are methodically selected from each partition, it becomes easier to pinpoint which input class causes a defect.
  - **Improves test quality** : Structured approach leads to more rigorous testing and higher quality software.
  - **Enhances [maintainability](/en/wiki/maintainability/)** : Test suites based on equivalence partitioning are easier to maintain and update in response to changes in the software.
  In practice, equivalence partitioning is often used alongside techniques like **boundary value analysis** to handle edge cases, ensuring a comprehensive [test strategy](/en/wiki/test-strategy/) that targets both typical and extreme input conditions.

#### How does equivalence partitioning contribute to the efficiency of testing?

  Equivalence partitioning streamlines the testing process by allowing testers to **identify representative values** from each partition or equivalence class. Instead of testing every possible input—which is often impractical or impossible—testers can select a few values that are representative of a larger group. This approach significantly **reduces the number of [test cases](/en/wiki/test-case/)** needed without compromising on coverage, as each value is assumed to elicit similar responses from the system under test.
  By focusing on these representative values, testers can allocate their resources more efficiently, dedicating time to more complex or high-risk areas of the application. Equivalence partitioning also aids in **identifying defects** within a particular range of inputs, making it easier to pinpoint and address potential issues.
  In practice, this technique can be combined with **automated [test scripts](/en/wiki/test-script/)** to further enhance efficiency. Testers can write a single script for each partition and run it with different input values, ensuring that a wide range of scenarios are covered with minimal manual intervention.
  Overall, equivalence partitioning contributes to testing efficiency by:

  - **Minimizing the number of [test cases](/en/wiki/test-case/)**
    while maintaining coverage.

  - **Saving time and resources**
    by avoiding redundant tests.

  - **Simplifying test design**
    and maintenance.

  - **Enhancing defect detection**
    within specific input ranges.

  - **Facilitating automation**
    , allowing for quick retesting and regression testing.
  By integrating equivalence partitioning into their testing strategy, automation engineers can achieve thorough coverage with fewer tests, leading to a more streamlined and cost-effective testing process.

### Implementation

#### How is equivalence partitioning implemented in software testing?

  Implementing equivalence partitioning in [software testing](/en/wiki/software-testing/) involves dividing input data into partitions that can be tested as a single representative set. Here's a succinct approach:

  1. **Identify**
    testable functions and their input data.

  2. **Divide**
    the input data of a function into
    **equivalent data classes**
    where each class should represent a set of values that are expected to be treated similarly by the code.

  3. **Select**
    one or more valid and invalid partitions. Valid partitions are those that follow the rules of the application. Invalid partitions contain data that should be rejected.

  4. **Create**
    test cases for each partition. Typically, one test case per partition is sufficient.

  5. **Write**
    test scripts that focus on the
    **boundary values**
    of these partitions, as these are often the source of defects.

  6. **Execute**
    the test cases and
    **verify**
    the results against expected outcomes.

     ```
     // Example: Testing a function that accepts age as input
     function isAdult(age) {
         return age >= 18;
     }
     // Equivalence partitions might be: < 18, 18-65, > 65
     // Test cases could be:
     // 1. Age = 17 (just below the boundary)
     // 2. Age = 30 (well within a valid range)
     // 3. Age = 70 (above the typical adult age range)
     ```
  Remember to **combine** equivalence partitioning with other techniques like boundary value analysis for a more thorough testing strategy. **Automate** where possible to streamline the process, and **review** partitioning decisions as the application evolves. Keep [test cases](/en/wiki/test-case/) **maintainable** and **reusable** to maximize the benefits of equivalence partitioning.

  1. **Identify**
#### What are the steps involved in equivalence partitioning?

  The steps involved in equivalence partitioning are as follows:

  1. **Identify testable functions**
    within the application that accept a range of inputs.

  2. **Divide**
    these inputs into groups or partitions where each member of a group is expected to be treated the same by the function.

  3. **Define boundaries**
    for each partition, ensuring they are mutually exclusive and collectively exhaustive.

  4. **Select [test cases](/en/wiki/test-case/)**
    —one from each partition, typically a value that is representative of that group.

  5. **Design and write [test scripts](/en/wiki/test-script/)**
    that execute these test cases against the function or system under test.

  6. **Run tests**
    and
    **record results**
    , verifying that the output is as expected for the representative value of each partition.

  7. **Analyze failures**
    to refine partitions or identify defects in the code.

  8. **Repeat**
    the process if new partitions are identified during the testing phase.
  This technique is often combined with **boundary value analysis** to select [test cases](/en/wiki/test-case/) at the edges of each partition. It's crucial to ensure that each partition is tested with at least one input to maximize coverage while minimizing the number of [test cases](/en/wiki/test-case/).

  1. **Identify testable functions**

#### What are some examples of equivalence partitioning?

  Examples of equivalence partitioning typically involve dividing input data into valid and invalid partitions from which [test cases](/en/wiki/test-case/) can be derived. Here are a few scenarios:

  1. **Input Field Validation**: For a text field accepting ages between 1 and 100:
    - Valid partition:
      `25`
      (within range)

     - Invalid partitions:
       `-5`
       (below range),
       `150`
       (above range)

     - Valid partition:
       `25`
       (within range)

     - Invalid partitions:
       `-5`
       (below range),
       `150`
       (above range)

  2. **User Role Permissions**: For a system with roles 'Admin', 'User', and 'Guest':
    - Valid partition: Test with 'Admin' to ensure all permissions are granted.
    - Invalid partition: Test with 'Guest' to ensure restricted access.
    - Valid partition: Test with 'Admin' to ensure all permissions are granted.
    - Invalid partition: Test with 'Guest' to ensure restricted access.
  3. **File Upload Feature**: Accepts files between 1MB and 5MB:
    - Valid partition:
      `3MB`
      file (within range)

     - Invalid partitions:
       `500KB`
       file (below range),
       `10MB`
       file (above range)

     - Valid partition:
       `3MB`
       file (within range)

  4. **Date Input**: For a system that processes dates within the current year:
    - Valid partition:
      `July 15, current year`

     - Invalid partitions:
       `January 1, next year`
       ,
       `December 31, previous year`

     - Valid partition:
       `July 15, current year`

     - Invalid partitions:
       `January 1, next year`
       ,
       `December 31, previous year`

  5. **Discount Code Application**: For a discount code that applies to orders over $50:
    - Valid partition:
      `$60`
      order (qualifies for discount)

     - Invalid partitions:
       `$40`
       order (does not qualify),
       `$0`
       order (no purchase)

     - Valid partition:
       `$60`
       order (qualifies for discount)

  6. **Search Functionality**: For a search feature that accepts 1-50 alphanumeric characters:
    - Valid partition:
      `Alpha123`
      (within range)

     - Invalid partitions:
       (empty string),
       `Alpha123...`
       (51 characters)

     - Valid partition:
       `Alpha123`
       (within range)

     - Invalid partitions:
       (empty string),
       `Alpha123...`
       (51 characters)
  By testing with representative values from each partition, you ensure coverage without redundant tests.

#### How can equivalence partitioning be used in combination with other testing techniques?

  Equivalence partitioning can be effectively combined with **boundary value analysis (BVA)** to enhance [test coverage](/en/wiki/test-coverage/). While equivalence partitioning divides input data into partitions from which [test cases](/en/wiki/test-case/) are derived, BVA focuses on the edges of these partitions. By integrating both, you ensure that both typical values and edge cases are tested, leading to more robust testing.
  Incorporating **[decision table testing](/en/wiki/decision-table-testing/)** with equivalence partitioning can also be beneficial. Decision tables represent complex business logic that can be tested against different combinations of inputs. Equivalence partitioning can be used to select representative inputs from these combinations, ensuring a comprehensive evaluation of the logic without redundant tests.
  **[State transition testing](/en/wiki/state-transition-testing/)** is another technique that complements equivalence partitioning. It involves testing different system states and transitions. Equivalence partitioning can help identify valid and invalid state transitions, which can then be used to create state transition tests.
  For **[integration testing](/en/wiki/integration-testing/)**, equivalence partitioning can be used to create [test cases](/en/wiki/test-case/) for modules interactions. By identifying partitions for the integrated inputs and outputs, you can ensure that the interaction between modules is tested for typical and atypical data sets.
  Lastly, when using **automated test generation tools**, equivalence partitioning can guide the generation of input data sets. By feeding the tool with the partitions identified, it can automatically generate [test cases](/en/wiki/test-case/) that are both diverse and relevant, increasing the efficiency of [automated testing](/en/wiki/automated-testing/).
  By combining equivalence partitioning with these techniques, you can achieve a more comprehensive and efficient testing process, ensuring that both common and critical edge cases are covered.

### Challenges and Solutions

#### What are the common challenges encountered while implementing equivalence partitioning?

  Common challenges encountered while implementing equivalence partitioning include:

  - **Identifying appropriate partitions**: Determining the right equivalence classes requires a deep understanding of the application's functionality and input domain. Incorrectly defined partitions can lead to inadequate testing.
  - **Handling complex input domains**: For applications with complex input structures, creating equivalence classes that are both comprehensive and manageable can be difficult.
  - **Overlapping partitions**: There's a risk of creating partitions that overlap, which can cause redundancy in [test cases](/en/wiki/test-case/) and waste resources.
  - **Boundary identification**: While equivalence partitioning focuses on treating inputs within a partition as the same, identifying and properly testing the boundaries between partitions can be challenging.
  - **Data-driven applications**: Applications that heavily rely on data inputs may require dynamic equivalence classes, which can complicate the partitioning process.
  - **Changes in requirements**: Evolving requirements can invalidate existing partitions, necessitating frequent reviews and updates to [test cases](/en/wiki/test-case/).
  - **Integration with other test methods**: Effectively combining equivalence partitioning with other testing techniques, like boundary value analysis, requires careful planning to avoid duplication of effort.
  To overcome these challenges, **regularly review and update** equivalence classes as the application and its requirements evolve. Use **tools and frameworks** that support equivalence partitioning to manage complex input domains. Ensure **clear communication** among team members to maintain a shared understanding of the partitions. Lastly, **integrate equivalence partitioning with other testing strategies** carefully to maximize [test coverage](/en/wiki/test-coverage/) and efficiency.

#### How can these challenges be overcome?

  Overcoming challenges in equivalence partitioning requires a combination of **strategic planning**, **tool proficiency**, and **analytical skills**. Here's how:

  - **Automate When Possible** : Use test automation tools to handle repetitive tasks, ensuring consistency and saving time. Automation can also help in managing large sets of equivalence classes and test cases.

    ```
    // Example: Automating test case generation
    const equivalenceClasses = defineEquivalenceClasses(inputDomain);
    const testCases = generateTestCases(equivalenceClasses);
    ```

  - **Collaborate with Developers**: Engage with developers to understand the application's logic, which can help in identifying relevant equivalence classes and avoiding invalid ones.
  - **Prioritize [Test Cases](/en/wiki/test-case/)**: Focus on high-risk areas first. Prioritize [test cases](/en/wiki/test-case/) based on the likelihood of failure and the impact of potential [bugs](/en/wiki/bug/).
  - **Review and Refine**: Regularly review the equivalence classes and [test cases](/en/wiki/test-case/) to ensure they are up-to-date with the application changes.
  - **Combine Techniques**: Use equivalence partitioning in conjunction with other testing techniques like boundary value analysis to cover edge cases more effectively.
  - **Leverage Domain Knowledge**: Apply domain expertise to identify subtle equivalence classes that might not be immediately obvious.
  - **Educate the Team**: Ensure the entire team understands the importance of equivalence partitioning to foster a quality-centric approach.
  - **Use Version Control**: Maintain [test cases](/en/wiki/test-case/) and equivalence classes in a version control system to track changes and collaborate efficiently.
  By addressing these challenges with a focused approach, [test automation](/en/wiki/test-automation/) engineers can enhance the effectiveness of equivalence partitioning and deliver more reliable software.

#### What are some best practices for implementing equivalence partitioning effectively?

  To implement **equivalence partitioning** effectively:

  - **Identify valid and invalid partitions**
    clearly. Ensure that each partition reflects a set of input conditions that should be treated the same by the software.

  - **Select representative values**
    from each partition. Choose values that are typical and likely to uncover defects.

  - **Avoid redundant tests**
    by not selecting multiple values from the same partition unless there is a specific reason.

  - **Consider the application context**
    . Understand the business logic to determine meaningful partitions that reflect user behavior.

  - **Use automation wisely**
    . Automate the generation of test cases from partitions to save time and reduce human error.

  - **Combine with boundary value analysis**
    for thorough testing. Test boundaries along with partition values to catch off-by-one errors and similar issues.

  - **Review and refine partitions**
    as the application evolves. Update your partitions when new features are added or when changes are made to the application.

  - **Document your approach**
    for future reference and for new team members. This helps maintain consistency and knowledge sharing.
  Here's a simple example in TypeScript using a hypothetical function `calculateDiscount` that applies different discount rates based on the order amount:

  ```
  describe('calculateDiscount Equivalence Partitioning', () => {
    it('should apply 5% discount for orders between $50 and $100', () => {
      expect(calculateDiscount(75)).toEqual(3.75); // Representative of this partition
    });
    it('should apply 10% discount for orders between $101 and $500', () => {
      expect(calculateDiscount(250)).toEqual(25); // Representative of this partition
    });
    // Additional tests for other partitions...
  });
  ```
  By focusing on these practices, you can ensure that equivalence partitioning is applied efficiently and effectively in your [test automation](/en/wiki/test-automation/) efforts.

#### How can equivalence partitioning be used to handle edge cases in software testing?

  Equivalence partitioning simplifies [test case](/en/wiki/test-case/) design by grouping inputs that should be treated the same by the system. To handle edge cases, this technique can be extended by considering the boundaries of these partitions. While equivalence partitioning assumes that all values in a partition will be treated identically by the system, edge cases often occur at the extremes of these partitions.
  To effectively manage edge cases, testers should:

  - **Identify boundary conditions**
    for each equivalence partition. These are the values at the extreme ends of the partition, such as the maximum and minimum possible values.

  - **Create additional [test cases](/en/wiki/test-case/)**
    specifically for these boundary conditions. This is where boundary value analysis (BVA) complements equivalence partitioning, focusing on the values at the edge of each partition.

  - **Consider off-by-one errors**
    , which are common at the edges. Test values just inside and just outside of the boundaries to catch these errors.
  For example, if an input field accepts ages from 1 to 100, equivalence partitioning might suggest a valid partition (1-100) and two invalid partitions (less than 1, more than 100). To handle edge cases, test the boundaries: 1 and 100 for the valid partition, and 0 and 101 for the invalid partitions.
  By combining equivalence partitioning with careful attention to boundary conditions, testers can ensure that edge cases are not overlooked, leading to more robust and reliable software.

  - **Identify boundary conditions**

### Advanced Concepts

#### What is the role of equivalence partitioning in end-to-end testing?

  In [end-to-end testing](/en/wiki/end-to-end-testing/), **equivalence partitioning** plays a crucial role in ensuring comprehensive coverage of the application's workflow by grouping inputs that should yield similar outcomes. This technique allows testers to select representative values from each partition, thereby verifying the behavior of the system across various scenarios without the need to test every possible input.
  When applied to end-to-end scenarios, equivalence partitioning helps to identify critical paths and functionalities that can be tested with a minimal yet effective set of [test cases](/en/wiki/test-case/). It streamlines the process by focusing on the validity of data as it flows through the entire system, from start to finish, ensuring that each functional area is adequately tested.
  By using equivalence partitioning, [test automation](/en/wiki/test-automation/) engineers can craft **high-level [test cases](/en/wiki/test-case/)** that simulate user interactions and data processing across the system's integrated components. This approach is particularly useful when dealing with complex systems where testing every possible combination of inputs and states is impractical.
  In practice, equivalence partitioning in [end-to-end testing](/en/wiki/end-to-end-testing/) might involve:

  - Defining partitions for user inputs at the beginning of a workflow.
  - Identifying output partitions that represent system responses at the end of the workflow.
  - Selecting input values that trigger different application paths, ensuring coverage of both typical use cases and exceptional conditions.
  Ultimately, equivalence partitioning in [end-to-end testing](/en/wiki/end-to-end-testing/) ensures that [test automation](/en/wiki/test-automation/) is both efficient and effective, covering a wide range of scenarios with fewer, more targeted tests.

#### How does equivalence partitioning help in reducing the number of test cases?

  Equivalence partitioning helps reduce the number of [test cases](/en/wiki/test-case/) by allowing testers to identify and group inputs that are expected to yield similar results into **equivalence classes**. By doing so, only a few [test cases](/en/wiki/test-case/) from each class are needed to be tested instead of exhaustively checking every possible input. This approach assumes that if one [test case](/en/wiki/test-case/) in a partition passes, the other cases in the same partition will also pass, thus significantly cutting down the total number of tests required.
  For instance, if an input field accepts numbers from 1 to 100, instead of writing 100 individual [test cases](/en/wiki/test-case/), you can create two partitions: one for valid inputs (1-100) and another for invalid inputs (everything else). You then select representative values from each partition, such as 1, 50, and 100 for the valid range, and a few outside the range for the invalid partition. This strategy ensures coverage of all possible scenarios with a minimal set of [test cases](/en/wiki/test-case/), optimizing both time and resources.
  In practice, equivalence partitioning is often used in conjunction with **boundary value analysis**, where [test cases](/en/wiki/test-case/) are designed around the edges of each partition. By focusing on the most likely areas for errors to occur, such as input limits and boundaries, testers can further enhance the effectiveness of their [test suite](/en/wiki/test-suite/) without unnecessary duplication of effort.

#### How can equivalence partitioning be applied in real-world scenarios?

  Equivalence partitioning can be practically applied in scenarios where input data or operational conditions can be divided into groups that elicit the same response from the system. For instance, consider a web form that accepts age as an input. Instead of testing every possible age, you can create partitions such as 'under 18', '18 to 65', and 'over 65'. You would then select a representative value from each partition for testing, ensuring coverage across different user demographics.
  In [API testing](/en/wiki/api-testing/), if an endpoint accepts a range of values for a parameter, you can partition the range into valid, invalid, and boundary groups. By testing with values from each partition, you can assert the [API](/en/wiki/api-testing/)'s behavior across its expected operational range without redundant tests for every possible input.
  For [performance testing](/en/wiki/performance-testing/), equivalence partitioning can be applied to user load levels. Instead of incrementing one user at a time, you can test with representative load levels such as 'light', 'moderate', 'heavy', and 'peak' to understand system performance under different stress conditions.
  In [database](/en/wiki/database/) testing, you might partition data sets based on criteria like data type, size, or format. Testing with a subset from each partition ensures that the [database](/en/wiki/database/) handles various data as expected.
  When dealing with configuration testing, you can partition based on different system configurations or environments. Selecting a representative set from each partition helps verify that the software behaves consistently across various [setups](/en/wiki/setup/).

  ```
  // Pseudo-code example for age input validation
  const agePartitions = {
    minor: 16, // representative of under 18
    adult: 30, // representative of 18 to 65
    senior: 70 // representative of over 65
  };
  for (const [group, age] of Object.entries(agePartitions)) {
    test(`Age input for ${group}`, () => {
      const response = submitAgeForm(age);
      expect(response).toBeValid();
    });
  }
  ```
  By focusing on representative [test cases](/en/wiki/test-case/) from each partition, you can achieve comprehensive [test coverage](/en/wiki/test-coverage/) with fewer [test cases](/en/wiki/test-case/), saving time and resources while maintaining confidence in the software's quality.

#### What is the relationship between equivalence partitioning and boundary value analysis?

  Equivalence Partitioning (EP) and Boundary Value Analysis (BVA) are complementary testing techniques used to design [test cases](/en/wiki/test-case/). EP divides input data of a software module into partitions of equivalent data from which [test cases](/en/wiki/test-case/) can be derived. In contrast, BVA focuses on the values at the edges of these partitions.
  The relationship between EP and BVA is that **BVA is often applied at the boundaries of the equivalence partitions** identified by EP. While EP ensures that each partition is represented by at least one [test case](/en/wiki/test-case/), BVA ensures that the boundaries of these partitions are thoroughly tested. This is because **errors are more likely to occur at the edge of an input range** rather than in the middle.
  By combining EP and BVA, testers can create a more robust set of [test cases](/en/wiki/test-case/) that cover both representative values and the edge cases that could lead to defects. Using EP, a tester can identify what to test, and with BVA, they can pinpoint exactly where to focus on the extremes of the input ranges.
  In practice, after identifying equivalence partitions, a tester will typically select [test cases](/en/wiki/test-case/) from the **middle of each partition** (using EP) and then complement these with [test cases](/en/wiki/test-case/) that test the **upper and lower boundaries** (using BVA) of each partition. This dual approach helps in achieving comprehensive [test coverage](/en/wiki/test-coverage/) with a minimal set of [test cases](/en/wiki/test-case/), ensuring both the efficiency and effectiveness of the testing process.
