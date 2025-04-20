/**
 * Rest Operator memungkinkan function untuk menerima argument dalam bentu array 
 */

function myFunction(...manyMoreArgs){
    console.log('manyMoreArgs', manyMoreArgs)
}

myFunction('One Be', 1.2, false)