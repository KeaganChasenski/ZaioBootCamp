function arrayMode(array){ 
var mode = {} ;
  var max = 0 , counter = 0 ;

  array.forEach(function(e) 
	{
    if (mode[e]) 
		{
      mode[e]++ ;
    } 
		else 
		{
      mode[e] = 1 ;
    }

    if(counter < mode[e]) 
		{
      max = e ;
      counter = mode[e] ;
    }
  } ) ;
}
