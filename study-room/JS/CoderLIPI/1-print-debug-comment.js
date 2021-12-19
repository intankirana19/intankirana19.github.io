console.log(`It's Chrizsan!`); // output will be -> It's Chrizsan!

/*

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ RUN CODE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
on terminal run code with command node then space then file name then enter
for this file:
node 1-print-debug-comment
or:
node 1-print-debug-comment.js

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION , OBJECT, OPERATOR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
the log function belongs to an object called console
then excecuted using open and closing parentheses '()' which is a function invocation operator or the method invocation operator

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Case Sensitive ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
JS is case sensitive. Dont use capital always use lower case.
for example Console.log(`It's Chrizsan!`); will throw error since Console with capital C is node defined inside of node (if run with node)


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JS as Language ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
there's a difference between the language itself and the environment that run inside of it
for example console.log is provided by node (allows us to tell node that we want to print something to the command line) or most web browsers ( allows us to print debugging/console messages that can only be viewed inside a web browser whenever we have the developers tools opened)


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEMICOLON ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
semicolon ';' is an end of line character as an indication to the compalier that this is a complete part
semicolon mostly unnecessary
The JavaScript parser will automatically add a semicolon when, during the parsing of the source code, it finds these particular situations:
1. when the next line starts with code that breaks the current one (code can spawn on multiple lines)
2. when the next line starts with a '}', closing the current block
3. when the end of the source code file is reached
4. when there is a return statement on its own line
5. when there is a break statement on its own line
6. when there is a throw statement on its own line
7. when there is a continue statement on its own line 


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMMENT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Use comment to tell the compiler to not excecute the commented code or to put notes on codes
For Single Line put code/words after //
For Multiple Lines put codes or words between /* */
