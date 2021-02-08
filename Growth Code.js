function population(initial, percent, coming, surpass){
    var nLooping = 0
    do{
      initial = initial +(initial * percent * 0.01) - coming
      nLooping += 1
    }while(initial < surpass)
    return nLooping
  }
  
  console.log(population(10,50,0,20))