const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGalleryMakeUp = ({url, alt}) => {
return `<li class="gallery-image">
  <img 
  src= ${url}
  alt= ${alt}/>
</li>`
};

const listRef = document.querySelector('.gallery');
const makeGallery = images.map(makeGalleryMakeUp).join(' ');

listRef.insertAdjacentHTML("afterbegin", makeGallery);



// Тренування

// const getImgList = elements => {
//  return elements.map((element)=>{
//     const imgRef = document.createElement('img');
//     const {url, alt} = element;
//     imgRef.src = url;
//     imgRef.alt = alt;
//     imgRef.width = 240;
//     return imgRef;
//     });}

// const imgList = getImgList(images);

// listRef.append(...imgList);

// listRef.style.display = 'flex';
// listRef.style.gap = '20px';
