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




