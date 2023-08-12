
*Note that this page is currently in an unfinished state and in the process of being written*

## Overview
This guide follows the general outline and some of the recommendations of [*Barr Group's Embedded C Coding Standard*](https://barrgroup.com/embedded-systems/books/embedded-c-coding-standard), set forth by Michael Barr.

Many of these rules are common sense and you probably are already following them in your own coding style. However, for consistency across the team it is practical to write them explicitly.

??? info "Revision History"
    - *Revision 0.1 by William K, 11 Jun 2023*
    - *Revision 0.2 by William K, 12 Aug 2023*

---

## Rules

### General Rules
#### Line Width
1. No line width is enforced as we do not do paper code reviews. Please use your best descretion for when a line is considered too long.
2. The preprocessor directive (```#define```) shall not be used to alter or rename any keyword or other part of the C programming language.
3. The minimum target standard for both C and C++ is **C/C++ 11**. However, if newer versions such as 14 or 17 are available for the toolchain in use, they are preferred.
   
#### Braces
1. Left braces should appear on the same line as the statement they are connected with. Right braces should always be on the line after the line of code in the block if the block is more than one line.
   
    Should the block be only one line long for a *conditional*, the entire statement including the right brace should be placed on the same line
    ``` c title="Example"
    if (condition) {code block;}
    else {
        code block line 1;
        code block line 2;
        code block line 3;
    }
    ```

#### Parentheses
1. To maintain clarity of long expressions, parentheses should be used to ensure proper execution order and provide better information to maintainers.
2. For further clarity, each side of a logical operator should be surrounded with parentheses, unless it is a single level operation.
```c title="Example"
((current_depth == target_depth) && (current_depth < pool_depth))

(soft_arm && hard_arm)
```

#### Common Abreviations
1. Unless it is an abbreviation in common use and understood widely among programmers, refrain from using abreviations as they can obfuscate the meaning of code.
2. Common variable names, such as ```i``` for a loop counter can be used under the condition that it is of limited scope and purpose, and that the context it is in is exceedingly clear.

#### Casts
1. Should a cast be required, the relevant lines should be commented to explain assumptions made.

#### Keywords
1. The use of ```goto``` should be exceedingly limited to only cases where it is justifiably required, and no other solution can be found (including rewriting other code to make the ```goto``` unecessary).
2. Uses of the ```continue``` keyword should be limited, but are allowed where it simplifies the code structure and makes it more legible.
3. *The ```static``` keyword needs some though put towards its use cases, I don't know if anything needs to be defined for this.*
4. ```const``` should be applied in all locations where appropriate. In some cases, it may be more applicable than a preprocessor directive, while the preprocessor directive may be more applicable in others.
5. ```volatile``` should be used in all cases where a variable can be modified by anything outside of the normal control flow of the code (i.e. an ISR).


### Comment Rules
1. Both single (//) and multi (/*) comment styles are considered acceptable, and should be used as applicable. When multi-line comments are used, all lines should begin with an asterisk (\*)
2. Multi-line comments should maintain a level of indentation with the leading asterisks vertical to each other, as shown below.
3. One leading space should be put between the comment text and the comment symbol.
4. If placed at the end of a line of code, all comments should be vertically aligned.
```c
/* comment text
 * comment text
 * comment text
 */

 // comment text
```


5. All comments should be written in coherent, complete sentences.
6. Assume a competentcy with the language from a reader, and avoid explaining the obvious. (*You aren't trying to hit a comment count for an assignment, you're trying to actually be helpful to yourself and others in the future*)
7. Single line comments should be used where the function of a single line may be ambiguous.

*TODO: Consider whether it's necessary to require conformance to automatic documentation generation standards*

#### Comment Locations
1. Functions should be preceeded by a short comment block explaining the relevant values (inputs, outputs) and an extremely brief description of the purpose of the function.
```c title="Example"
/* [sum]
 * Returns the sum of two numbers
 *
 * Input: int A, int B
 * Output: int C
 */

int sum(int A, int B) {
    int c;
    c = a + b;
    return c;
}
```

### White Space Rules
1. The keywords ```if, while, for, switch,``` and ```return``` should be followed by a single space if there is more text on the same line.
2. Unless specified by another whitespace rule, all operators should be surrounded on either side by a single space.
3. Unary operators should not have a space between the operator and the operand.
4. Structure pointer and member operators should have no whitespace on either side.
5. Parentheses, braces, and brackets should not have an adjacent space on the interior side.
6. Excepting the end of a line, separating commas should should be followed by one space.
7. Semicolons should follow a preceeding statement without a space, but should always be followed by a space.
8. Use whitespace to separate blocks of code from each other in a logical fashion. (William's note: to please my OCD use either 1 or 3 lines of separation depending on context, don't use two :) )

#### Pointer (* and &) Operators
1. When used with a type, such as in the case of ```pointerType name```, the pointer operator * should be appended to the type name (i.e. ```type* name```).
2. Otherwise both operators should be written without a space on the operand side.

#### Alignment Rules
1. TODO: Consider whether to always left align the # of a preprocessor directive, regardless of the indentation of the line
2. Align relevant blocks of code together (Don't be stupid) 
    TODO: Make this nicer?

#### Tab Rules
1. The unicode tab character should not appear in files. Instead, the specified tab size is 4 spaces.

### Module Rules
#### Naming Conventions
1. File names should consist only of lower case letters, numbers, and underscores.
2. All module names should not overlap with those of the standard library.
TODO: content

### Data Type Rules
TODO: content

### Procedure Rules
TODO: content

### Variable Rules
TODO: content

### Statement Rules
TODO: content