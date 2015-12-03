for(var number = 1; number < 100; number++) {
    if (number % 15 == 0){
document.write ("FizzBuzz");
        document.write('<br>');
} else if (number % 3 == 0){
    document.write("fizz");
    document.write('<br>')
}
    else if (number % 5 == 0){
        document.write("buzz");
        document.write('<br>')
    }
    else {document.write(number);
         document.write('<br>')} 
}
                 

