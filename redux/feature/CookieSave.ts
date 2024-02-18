import { getCookie, setCookie} from "cookies-next";
import toast from "react-hot-toast";

export const CartSet =  (body:Cartitems) => {
    
    const getcookie = getCookie("CartItems");
    getcookie ? "" : setCookie("CartItems", []);
    const Cart = getcookie ? JSON.parse(String(getcookie)) : [];
    const deliffav = Cart.find((e: any) => e.id === body.id);
    if (deliffav) {
      const newdata = Cart.filter((e: any) => e.id !== body.id);
      setCookie("CartItems", JSON.stringify(newdata));
      return newdata;
    } else {
      if(Cart.length < 15){
        Cart.push(body);
        setCookie("CartItems", JSON.stringify(Cart));
        toast.success('Added to card')
        return Cart;
      }
      toast.error("Cart Is full, Please Cekout 1 Product")
    }
  };

  export const updateIncrement = async (body:Cartitems) => {
    const getcookie = getCookie("CartItems");
    const datacart = JSON.parse(String(getcookie));
  
     const findid = await datacart.find((el:Cartitems) =>  el.id === body.id )
     if(findid.Qty <= body.stock ) {
       console.log(findid)
        let product:Cartitems = {
            id:findid.id,
            isChecked:findid.isChecked,
            img:findid.img,
            Price:findid.Price,
            Qty:findid.Qty +1,
            ProductName:findid.ProductName,
            stock:findid.stock
           }
       const did = await datacart.filter((el:any) =>  el.id !== body.id) 
       did.push(product)
       setCookie("CartItems", []);
       setCookie("CartItems", JSON.stringify(did));
     }
     
  }
  
  export const updatedecrement = async (body:Cartitems) => {
    const getcookie = getCookie("CartItems");
    const datacart = JSON.parse(String(getcookie));
  
     const findid = await datacart.find((el:any) =>  el.id === body.id  );
     if(findid.Qty > 1){
       let product:Cartitems = {
        id:findid.id,
        isChecked:findid.isChecked,
        img:findid.img,
        Price:findid.Price,
        Qty:findid.Qty -1,
        ProductName:findid.ProductName,
        stock:findid.stock
       }
       const did = await datacart.filter((el:any) =>  el.id !== body.id )
       did.push(product)
       setCookie("CartItems", []);
       setCookie("CartItems", JSON.stringify(did));
     }
     
  }



  export const CustomerSet = async (body:DataCustomer) => {
    const getcookie = getCookie("MyDataAddrees");
    getcookie ? "" : setCookie("MyDataAddrees", []);
    const Customer = getcookie ? JSON.parse(String(getcookie)) : [];
    const deliffav = Customer.find((e: any) => e.Email === body.Email);
    if (deliffav) {
      const newdata = Customer.filter((e: any) => e.Email !== body.Email);
      setCookie("MyDataAddrees", JSON.stringify(newdata));
      return newdata;
    } else {
      if(Customer.length <= 2){
        Customer.push(body);
        setCookie("MyDataAddrees", JSON.stringify(Customer));
        return Customer;
      }
      toast.error("Addrees, limit 5")
    }

  }

  export const UpdateCustomerSet = async (body:DataCustomer) => {
    const getcookie = getCookie("MyDataAddrees");
    getcookie ? "" : setCookie("MyDataAddrees", []);
    const Customer = getcookie ? JSON.parse(String(getcookie)) : [];

    const newArrayCustomer = Customer.map((item:DataCustomer) => {
      if (item.Email === body.Email) {
        return { ...item, Selected: true };
      }
      return { ...item, Selected: false };
    });
    setCookie("MyDataAddrees", JSON.stringify(newArrayCustomer));

  }