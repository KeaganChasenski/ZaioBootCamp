function FirstDuplicate(array){

var seen = []
  for (let v of a)
	{
    if (seen[v]) return v
    seen[v] = v
  }
  return - 1
}
