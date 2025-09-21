import { Injectable } from '@angular/core';
import { Iproducts } from '../modules/iproducts';

@Injectable({
  providedIn: 'root'
})
export class StaticProducts {
  products:Iproducts[];
  constructor(){
this. products=[
      {id:1,name:'potato',urlImage:'https://m.media-amazon.com/images/I/41QKCkQ2A5L._UF894,1000_QL80_.jpg',amount:2,price:20,catId:1},
      {id:2,name:'cucumber',urlImage:'https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/2/3/2394050000003kg.jpg',amount:20,price:25,catId:1},
      {id:3,name:'carrot',urlImage:'https://cdn.mafrservices.com/sys-master-root/hf1/h75/49035110809630/14638_main.jpg',amount:1,price:30,catId:1},
      {id:4,name:'tomato',urlImage:'https://hasseal.com/wp-content/uploads/2023/01/%D8%B7%D9%85%D8%A7%D9%85-%D8%A8%D9%84.jpg',amount:60,price:15,catId:1},
      {id:5,name:'karnapit',urlImage:'https://baladi-online.com/wp-content/uploads/2023/03/Flat-Cabbage.jpeg',amount:0,price:50,catId:1},
      {id:6,name:'red onion',urlImage:'https://cdn.mafrservices.com/sys-master-root/h19/hb3/13156613718046/315894_main.jpg?im=Resize=480',amount:70,price:17,catId:1},
      {id:7,name:'yellow onion',urlImage:'https://growhoss.com/cdn/shop/products/yellow-sweet-spanish-utah-onion_460x@2x.jpg?v=1691784853',amount:50,price:20,catId:1},
      {id:8,name:'meat',urlImage:'https://i.pinimg.com/736x/58/1a/3c/581a3c00d3bb0a3dcf9cf420c216d3b8.jpg',amount:20,price:330,catId:2},
      {id:9,name:'chiken',urlImage:'https://i.pinimg.com/1200x/20/b9/6c/20b96ca961f16cd172743471c3c93bd9.jpg',amount:0,price:100,catId:2},
      {id:10,name:'meat3',urlImage:'https://i.pinimg.com/1200x/84/49/4a/84494abbc859c52362df2934fea80ba1.jpg',amount:10,price:350,catId:2},
      {id:11,name:'meat4',urlImage:'https://i.pinimg.com/736x/1d/dc/0a/1ddc0a16433da793ba26132501dc7080.jpg',amount:6,price:150,catId:2},
      {id:12,name:'meat5',urlImage:'https://i.pinimg.com/736x/71/0d/6d/710d6dadd603f5ccbb95f93b31ab2b4a.jpg',amount:40,price:80,catId:2},
      {id:15,name:'red apple',urlImage:'https://cdn.mafrservices.com/sys-master-root/h98/h67/14257452318750/230871_main.jpg',amount:2,price:20,catId:3},
      {id:16,name:'banana',urlImage:'https://lebanonews.net/wp-content/uploads/2023/07/banana-yummi.jpg',amount:0,price:25,catId:3},
      {id:17,name:'reen apple',urlImage:'https://alahmadiashop.com/eg/wp-content/uploads/2020/01/095-green-apple-Imported.jpg',amount:1,price:30,catId:3},
      {id:18,name:'peach',urlImage:'https://cdn.mafrservices.com/sys-master-root/ha6/h4f/10187580112926/32506_main.jpg',amount:63,price:15,catId:3},
      {id:19,name:'red grapes',urlImage:'https://alteencompany.com/wp-content/uploads/2025/01/Red-Seedless-Grapes-Egypt.jpg',amount:50,price:50,catId:3},
      {id:20,name:'green grapes',urlImage:'https://cdn.salla.sa/NNKNq/9e2e5757-00d6-4968-802b-156ff7ab654e-1000x1000-D2wDIol86yVliIwZOZ3QxZBGQ3GZNYIrKw4U6WYb.png',amount:10,price:17,catId:3},
      {id:21,name:'gray fig',urlImage:'https://al3loom.com/wp-content/uploads/2021/07/%D8%AA%D9%8A%D9%86.jpg',amount:50,price:17,catId:3},
      {id:22,name:'Strawberry',urlImage:'https://cdn.mafrservices.com/sys-master-root/h49/h46/28115621117982/289236_main.jpg',amount:0,price:17,catId:3},
      {id:23,name:'Manga',urlImage:'https://cdn.mafrservices.com/sys-master-root/h64/h5e/26650477133854/78248_main.jpg?im=Resize=480',amount:50,price:60,catId:3},
      {id:24,name:'watermelon',urlImage:'https://upload.wikimedia.org/wikipedia/commons/2/2e/Wassermelone.jpg',amount:10,price:40,catId:3}
    ]; 
  } 
  getProducts():Iproducts[]{
    return this.products;
  } 
  getProductById(id:number):Iproducts | null {
    let foundedpro = this.products.find((pro)=>pro.id==id);
    return foundedpro ? foundedpro : null;
  } 
  getProductsByCatId(catId:number):Iproducts[]{
    return this.products.filter((pro)=>pro.catId==catId)
  } 

}
