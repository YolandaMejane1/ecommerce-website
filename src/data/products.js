import AppleWatchImage from '../assets/Product-Image.png';
import SonyHeadphonesImage from '../assets/Product-Image (1).png';
import Iphone11BlackImage from '../assets/Product-Image (2).png';
import Iphone11BlueImage from '../assets/Product-Image (8).png';
import Iphone13WhiteImage from '../assets/Product-Image (5).png';
import Iphone14RedImage from '../assets/Product-Image (4).png';

const products = [
  {
    id: 1,
    name: 'Apple Watch',
    price: 529.99,
    img: AppleWatchImage,
    description: 'Series 5 SE',
    rating: 4.5,
    information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Mauris non tempor purus. Curabitur viverra augue ac ante pretium, nec pretium felis aliquam. Vestibulum auctor ultricies turpis, ac hendrerit libero tempor nec. In cursus ex id dui varius, nec ullamcorper leo vehicula. Etiam convallis velit ut mauris tincidunt, sed tincidunt ligula fermentum. Quisque id dolor ligula. Vivamus fringilla varius ligula, ac bibendum augue consectetur a.',
    cartInformation: 'Lorem ipsum dolor sit amet. Sed quis ex et nisi sodales lacinia.',
  },
  {
    id: 2,
    name: 'Sony ZX330BT',
    price: 39.99,
    img: SonyHeadphonesImage,
    description: 'Light Grey',
    rating: 4.0,
    information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed tristique dui ac erat facilisis, ac fringilla purus egestas. Fusce condimentum tempor justo non efficitur. Aliquam congue orci a bibendum vehicula. Vestibulum quis est eu odio dictum aliquet at nec nulla. Morbi a interdum purus. Curabitur lobortis nisl a neque tempus, a congue neque convallis.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
    cartInformation: 'Sed sed mauris id purus tristique fermentum. Vestibulum sollicitudin velit in massa sodales.',
  },
  {
    id: 3,
    name: 'Iphone 11',
    price: 619.99,
    img: Iphone11BlackImage,
    description: 'Serious Black',
    rating: 4.7,
    information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Mauris et erat ut ligula pharetra suscipit. Phasellus bibendum magna eget sapien cursus, vel consectetur magna laoreet. Sed consectetur vulputate dui, eget cursus elit tincidunt sit amet. Curabitur sollicitudin erat sit amet odio volutpat, nec pharetra turpis euismod.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
    cartInformation: 'Praesent tempor libero eu mi cursus, ac tristique metus fermentum.',
  },
  {
    id: 4,
    name: 'Iphone 11',
    price: 619.99,
    img: Iphone11BlueImage,
    description: 'Subway Blue',
    rating: 4.6,
    information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Sed malesuada risus ut dui bibendum, vel feugiat turpis tempus. Nullam convallis arcu ac dolor maximus, at posuere elit volutpat. Cras laoreet nunc et egestas tincidunt. Etiam maximus ligula a est convallis tempus.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
    cartInformation: 'Nullam ac risus sed purus consectetur accumsan. Nam ornare libero et sapien fringilla.',
  },
  {
    id: 5,
    name: 'Iphone 11',
    price: 619.99,
    img: Iphone14RedImage,
    description: 'Product RED',
    rating: 4.3,
    information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Curabitur venenatis lectus in fermentum gravida. Phasellus sollicitudin feugiat ipsum, ac eleifend augue fermentum ac. In consectetur justo sit amet malesuada volutpat.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
    cartInformation: 'Fusce et augue ultricies, tincidunt enim ac, volutpat mi.',
  },
  {
    id: 6,
    name: 'Iphone 11',
    price: 619.99,
    img: Iphone13WhiteImage,
    description: 'Milky White',
    rating: 4.8,
    information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nam euismod felis ut eros viverra, vel laoreet arcu gravida. Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
    cartInformation: 'Nulla eget sapien id arcu pretium rhoncus. Vestibulum euismod nisi vel nisi gravida.',
  },
  {
    id: 7,
    name: 'Iphone 13',
    price: 619.99,
    img: Iphone14RedImage,
    description: 'Product RED',
    rating: 4.9,
    information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Quisque ut augue fringilla, mollis risus ac, tristique est. Integer ultricies, orci nec lobortis viverra, purus metus vestibulum sem, ut sodales ante risus ac libero.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
    cartInformation: 'Mauris malesuada sapien ac nulla tincidunt, non lobortis sapien tempor.',
  },
  {
    id: 8,
    name: 'Iphone 14',
    price: 619.99,
    img: Iphone14RedImage,
    description: 'Product RED',
    rating: 4.2,
    information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Donec convallis, arcu sed tincidunt gravida, risus dui rutrum ligula, et laoreet risus velit ut nisi. Fusce lacinia sollicitudin quam, a facilisis eros tincidunt nec.Integer eget erat ac metus hendrerit luctus. Nam a felis non libero suscipit vehicula sit amet non odio. Sed vulputate eros ac nulla gravida.',
    cartInformation: 'Aliquam sit amet nulla vitae ante lobortis aliquet. Cras sollicitudin orci at quam accumsan.',
  },
];

export default products;