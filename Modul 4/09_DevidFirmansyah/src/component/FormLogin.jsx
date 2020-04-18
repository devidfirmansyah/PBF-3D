import React, { Component } from 'react';
import './FormLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function FormLogin() {
    return (
        <div>
            <center><h2 className="Title">Form Login</h2></center>
            <center><h1 className="SubTitle">Tugas Pertemuan Ketiga</h1></center>
            <form>
                <div className="Form1">
                    <div className="Form2">
                        <form action="">

                            <label class="label">Username</label>
                            <input class="formIsi" type="text" placeholder="Masukkan Username" name="username" required />

                            <label class="label">Password</label>
                            <input class="formIsi" type="password" placeholder="Masukkan Password" name="password" required />

                            <button type="submit" class="buttonLogin">Login</button>

                            <input type="checkbox" class="remember" defaultChecked /> Remember Me
                                <br /><br />

                            <button type="submit" class="buttonCancel">Cancel</button>
                        </form>

                    </div>
                </div>

            </form>
        </div>
    )
}

export default FormLogin;