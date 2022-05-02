#Exercises Solution Documentation

## Exercise 5 - Accessible Images
### Informative Images
We identified the following 4 informative images: 

- iceberg.jpg (found on index.html)
- logo.jpg (found on article.html, empty.html, index.html & login.html)
- robots.jpg (found on index.html)
- universe.jpg (found on index.html)

All the informative images are currently missing an "alt" description
and therefore are not accessible to people using ScreenReaders. That is why
we decided to add such a description. By doing so the ScreenReader is now 
able to properly read our image description. For instance, we added 
alt="Picture of an Iceberg on Water" to the Iceberg image.

### Complex Images
Complex images usually are graphs and charts which try to visualize some data.
We found such an image in the article.html file. There a line chart is visualizing
global average temperature over time.

To make the complex image more accessible we added a brief "alt" description as well
as a more in-depth description with "figcaption".

## Exercise 6 - Accessible Tables
### Header cells vs data cells
Century, Year and Temperature (including it sub headers Average and Smoothed) are column headers. 
The 19th, 20th and 21st Century are row headers. We also decided to use the years as row headers. 
That leaves use with only the specific temperature as data cells.

In its current form the header and data cells are not marked up correctly.
The headers were marked as data entries "td" and were part of the table body "tbody".
This is wrong. We fixed this by introducing  "thead" for the headers and replacing the headers 
"td" with "th".

### Column and row groups
#### Column Groups
The headers century and year should span two rows, hence we introduced "rowspan=2" and "scope=col" for these headers.
The header temperature has to span two columns, that is why we used "colspan=2" and "scope=colgroup".

#### Row Groups
The 19th, 20th and 21st century row headers span two rows and therefore we used "rowspan=2" and 
"scope=rowgroup". The specific years we defined with "scope=row"
