import React from "react";
import { Heading, Notes, Slide, Image, Appear, Table, TableHeader, TableHeaderItem, TableRow, TableBody, TableItem } from "spectacle";

export default (
    <Slide transition={['fade']} transitionDuration={1} >
        <Heading>
              Mutants ?
        </Heading>
        <Table margin="60px 0px">

  <TableBody>
    <TableRow>
      <TableItem>a + b</TableItem>
      <TableItem><span role="img" aria-label="arror">➡️</span></TableItem>
      <TableItem>a - b</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>a &lt; b</TableItem>
      <TableItem><span role="img" aria-label="arror">➡️</span></TableItem>
      <TableItem>a &lt;= b</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>a &lt; b</TableItem>
      <TableItem><span role="img" aria-label="arror">➡️</span></TableItem>
      <TableItem>a &gt; b</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>a === b</TableItem>
      <TableItem><span role="img" aria-label="arror">➡️</span></TableItem>
      <TableItem>a !== b</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>if (a &gt; b) {'{'} }</TableItem>
      <TableItem><span role="img" aria-label="arror">➡️</span></TableItem>
      <TableItem>if (true) {'{'} }</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>if (a &gt; b) {'{'} }</TableItem>
      <TableItem><span role="img" aria-label="arror">➡️</span></TableItem>
      <TableItem>if (false) {'{'} }</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>a === b</TableItem>
      <TableItem><span role="img" aria-label="arror">➡️</span></TableItem>
      <TableItem>a !== b</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>a === b</TableItem>
      <TableItem><span role="img" aria-label="arror">➡️</span></TableItem>
      <TableItem>a !== b</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>a === b</TableItem>
      <TableItem><span role="img" aria-label="arror">➡️</span></TableItem>
      <TableItem>a !== b</TableItem>
    </TableRow>
  </TableBody>
</Table>
    </Slide>


);