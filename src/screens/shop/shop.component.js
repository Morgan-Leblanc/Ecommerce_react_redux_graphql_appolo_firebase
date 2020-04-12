import React, {useState} from 'react'
import data from "../../data/dataShop"
import CollectionPreview from  "../../components/preview-collection/preview.component"

export default function ShopPage() {
    const [dataShop,setDataShop] = useState(data.SHOP_DATA)
    return (
        <div className="shop-page">
            {dataShop.map(({id,...propsDataShop}) => (
                <CollectionPreview key={id} {...propsDataShop} />
            ))}   
        </div>
    )
}
