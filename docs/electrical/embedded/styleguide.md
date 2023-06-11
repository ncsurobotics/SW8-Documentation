
*Note that this page is currently an outline and most of the content is not yet written.*

## Overview
This guide follows the general outline and some of the recommendations of the "[Embedded C Coding Standard](https://barrgroup.com/embedded-systems/books/embedded-c-coding-standard)", set forth by Michael Barr. Wherever a rule does not differ from those set out by Mr. Barr, the rule will be directly referenced in the format ```section.subsection.rule```, but not directly quoted. Therefore, this guide is meant to work more as an overlay to the rules set out by Mr. Barr that better suits the preferences of the club.

Many of these rules are common sense and you probably are already following them in your own coding style. However, for consistency across the team it is practical to write them explicitly.

> [!note] Revision History
> 
> *Revision 1.0 by William K, 11 Jun 2023*

---

## Rules

### General Rules
#### Line Width
1. No line width enforced as we do not do paper code reviews. Please use your best descretion for when a line is considered too long.
   
#### Braces
*See section 1.3 of Barr*
1. Left braces should appear on the same line as the statement they are connected with.
> [!example]
> ```c
> if (condition) {code block;}
> else {
>     code block line 1;
>     code block line 2;
>     code block line 3;
> }
> ```

#### Parentheses
*See sections 1.4 of Barr*

#### Common Abreviations
*See section 1.5 of Barr*

#### Casts
*See section 1.6 of Barr*

#### Keywords to Avoid
*See section 1.7 of Barr*
1. Uses of the ```continue``` keyword should be limited, but are allowed where it simplifies the code structure and makes it more legible.

#### Keywords to Frequent
*See section 1.8 of Barr*


### Comment Rules
#### Acceptable Formats
*See section 2.1 of Barr*

#### Locations and Content
*See section 2.2 of Barr*


### White Space Rules

### Module Rules

### Data Type Rules

### Procedure Rules

### Variable Rules

### Statement Rules