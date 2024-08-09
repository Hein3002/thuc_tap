export default function Login() {
    return (
        <div class='root_html'>
            <div class='container'>
                <div class='container_login'>
                    <div class="lank-div">
                        <form class="lank-form">
                            <input class="hien-input" placeholder="Email" id='email' />
                            <input type='password' class="hien-input" placeholder="Mật khẩu" id='mat_khau' />
                            <div style='text-align: center; margin-top: 20px;'>
                                <a style='margin-right: 10px; ' href="#" id="dang_nhap">Đăng nhập</a>
                                <a href="./dangky.html">Đăng ký</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}