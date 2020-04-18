import React from 'react';
import logo from '../src/foto_devid.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Table, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
        </a>
      </header>
    </div>
  );
}

const Biodata = (props) => {
  return (
    <div class="container-sm">
      <div class="row">
        <div class="col" >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan="2" >Biodata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nama Lengkap :</td>
                <td>Devid Firmansyah</td>
              </tr>
              <tr>
                <td>NIM : </td>
                <td>1741720110</td>
              </tr>
              <tr>
                <td>Alamat :</td>
                <td>Jalan Kesumba 30B Jatimulyo Lowokwaru Kota Malang</td>
              </tr>
              <tr>
                <td>Jurusan / Program Studi : </td>
                <td>Teknologi Informasi / D4 Teknik Informatika</td>
              </tr>

              <tr>
                <td>Pas Foto :</td>
                <td class="image">
                  <Image src={logo} alt="logo" thumbnail />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Biodata;
