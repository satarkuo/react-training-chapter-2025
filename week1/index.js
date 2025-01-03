const productsData = [
    {
        category: "甜甜圈",
        content: "尺寸：14x14cm",
        description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
        id: "-L9tH8jxVb2Ka_DYPwng",
        is_enabled: 1,
        origin_price: 150,
        price: 99,
        title: "草莓莓果夾心圈",
        unit: "元",
        num: 10,
        imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?w=500",
        imagesUrl: [
          "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=200",
          "https://images.unsplash.com/photo-1559656914-a30970c1affd?w=200"
        ]
      },
      {
        category: "蛋糕",
        content: "尺寸：6寸",
        description: "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
        id: "-McJ-VvcwfN1_Ye_NtVA",
        is_enabled: 1,
        origin_price: 1000,
        price: 900,
        title: "蜂蜜檸檬蛋糕",
        unit: "個",
        num: 1,
        imageUrl: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        ]
      },
      {
        category: "蛋糕",
        content: "尺寸：6寸",
        description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
        id: "-McJ-VyqaFlLzUMmpPpm",
        is_enabled: 1,
        origin_price: 700,
        price: 600,
        title: "暗黑千層",
        unit: "個",
        num: 15,
        imageUrl: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        imagesUrl: [
          "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60",
          "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60"
        ]
      }
];

function App(){
    const [tempProduct, setTempProduct] = React.useState();
    return <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>產品列表</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">產品名稱</th>
                                <th scope="col">原價</th>
                                <th scope="col">售價</th>
                                <th scope="col">是否啟用</th>
                                <th scope="col">查看細節</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.origin_price}</td>
                                    <td>{item.price}</td>
                                    <td>{item.is_enabled ? `啟用` : `未啟用`}</td>
                                    <td><button type="button" className="btn btn-primary" onClick={() => setTempProduct(item)}>查看細節</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h2>產品細節</h2>
                    
                    {tempProduct ? (
                        <div className="card">
                            <img className="card-img-top object-fit" src={tempProduct.imageUrl}  alt={`主圖:`+ tempProduct.title} />
                            <div className="card-body">
                                <h5 className="card-title">{tempProduct.title}<span className="badge text-bg-primary ms-2">{tempProduct.category}</span></h5>
                                <p className="card-text">{tempProduct.description}</p>
                                <p className="card-text">商品內容： {tempProduct.content}</p>
                                <p className="card-text"><del className="text-secondary">{tempProduct.origin_price}</del> / {tempProduct.price} 元</p>
                                <h6>更多圖片：</h6>
                                <div className="d-flex flex-wrap">
                                    {tempProduct.imagesUrl.map((url, index) => (
                                        <img key={index} className="images object-fit me-3 mb-3" src={url}  alt={`更多圖片:`+ tempProduct.title} />
                                    ))}
                                </div>
                                <a href="#" className="btn btn-primary" onClick={() => setTempProduct()}>Close</a>
                            </div>
                        </div>
                        ) : ( <p className="text-secondary">請選擇一個產品查看細節</p> )
                    }
                    
                </div>
            </div>
        </div>
    </>;
}

ReactDOM
    .createRoot(document.querySelector('#root'))
    .render(<App />);