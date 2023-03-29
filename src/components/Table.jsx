function Table(
   genere:string,
    book title:string,
    Author: String,
    published by:string,
    published month/year:string number,
  ) {
    return {Genere, book title,author,publishedby,publishedmonth/year}
  
  const rows = [
    createData('horror',dracula,rajappan,varantharapillybooks,24/5/2002)
    createData('comedy',sarapattaparambarai,raj,dcbooks,34/64/2408),
    createData('tragedy',oghy,salam,rockybai,32/77/7009),
    
   
  ];
  
  {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="books">
          <TableHead>
            <TableRow>
              <TableCell>books</TableCell>
              <TableCell align="right">author</TableCell>
              <TableCell align="right">Book title</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">published:month/year</TableCell>
              <TableCell align="right">published by</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Tablecell>
                  {row.name}
                </TableCell>
                <TableCell align="right">{}</TableCell>
                <TableCell align="right">{}</TableCell>
                <TableCell align="right">{}</TableCell>
                <TableCell align="right">{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }