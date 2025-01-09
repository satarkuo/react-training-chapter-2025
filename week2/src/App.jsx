import { useState } from "react";
import "./assets/style.css";


function App() {
  const [isAuth, setIsAuth] = useState(false)
  // const [account, setAccount] = useState({
  //   username: "example@test.com",
  //   password: "example"
  // })

  return (
    <>
    { isAuth? (
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <button type="submit" className="btn btn-primary" onClick={() => setIsAuth(!isAuth)}>登出</button>
            </div>
          </div>
          <div className="row row-cols-2 my-5">
            <div className="col">
              <h1 className="h2 mb-3">產品列表</h1>
              <div className="table-responsive">
                <table className="table align-middle">
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
                    <tr>
                      <th scope="row">千層</th>
                      <td>700</td>
                      <td>600</td>
                      <td>是</td>
                      <td><button type="button" className="btn btn-sm btn-primary">查看細節</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-secondary">目前沒有產品</p>
            </div>
            <div className="col">
              <h1 className="h2 mb-3">單一產品細節</h1>
              <p className="text-secondary">請選擇一個產品查看</p>
              <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">千層<span className="badge bg-primary ms-2">蛋糕</span></h5>
                  <p className="card-text">產品描述：</p>
                  <p className="card-text">產品內容：</p>
                  <p className="card-text"><del className="text-secondary">100 元</del> / 50元</p>
                  <h5 className="card-title">更多圖片：</h5>
                  <div className="d-flex flex-wrap mb-3">
                    <img src="..." />
                    <img src="..." />
                    <img src="..." />
                  </div>
                  <a href="#" className="btn btn-primary">close</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="login m-auto my-5 p-5">
          <h1 className="h2 text-center mb-3">歡迎登入</h1>
          <form>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type="submit" className="btn btn-lg btn-primary w-100" onClick={() => setIsAuth(!isAuth)}>登入</button>
          </form>
        </div>
      )}
    
    </>
  )
}

export default App
