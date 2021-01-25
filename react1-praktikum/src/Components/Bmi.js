// import library
import React, { Component } from "react";
import Alert from "./Alert";

class Bmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      berat: "60",
      tinggi: "170",
      hasil: "Anda Normal",
      note: "",
    };

    this.BeratChange = this.BeratChange.bind(this);
    this.TinggiChange = this.TinggiChange.bind(this);
    this.hitungBmi = this.hitungBmi.bind(this);
  }

  BeratChange(event) {
    this.setState({ berat: event.target.value });
  }

  TinggiChange(event) {
    this.setState({ tinggi: event.target.value });
  }

  hitungBmi = (event) => {
    let tinggi = this.state.tinggi;
    let berat = this.state.berat;

    // proses perhitungan
    tinggi /= 100; // Untuk mengubah CM -> M
    let hasil = berat / (tinggi * tinggi);

    // ifelse
    if (hasil <= 18.5) {
      this.setState({ hasil: "Anda Kurus" }); // menggunakan setState untuk mengubah state
      this.setState({ note: "perbanyak olahraga dan porsi makan anda" });
    } else if (hasil >= 18.5 && hasil <= 22.9) {
      this.setState({ hasil: "Anda Normal" });
      this.setState({
        note:
          "pertahankan kesehatan anda dengan olahraga yang rutin serta makanan bergizi",
      });
    } else if (hasil >= 23 && hasil <= 24.9) {
      this.setState({ hasil: "Anda Obesitas" });
      this.setState({ note: "mulailah berolahraga dan diet" });
    } else {
      this.setState({ hasil: "Anda Tidak Normal" });
      this.setState({
        note:
          "mohon maaf anda terlalu gendut, segera hubungi dokter untuk penanganan",
      });
    }

    event.preventDefault();
  };

  render() {
    return (
      <div className="card col-sm-5 mx-auto m-5">
        <div className="card-header bg-primary text-center text-white">
          <h4>Body Mass Index</h4>
        </div>
        <div className="card-body">
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <label class="input-group-text">Berat (kg) : </label>
            </div>
            <input
              type="number"
              className="form-control"
              value={this.state.berat}
              onChange={this.BeratChange}
            />
          </div>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <label class="input-group-text">Tinggi (cm) : </label>
            </div>
            <input
              type="number"
              className="form-control"
              value={this.state.tinggi}
              onChange={this.TinggiChange}
            />
          </div>
        </div>
        <div className="card-footer">
          <button
            className="form-control btn btn-success"
            onClick={this.hitungBmi}
          >
            Hitung
          </button>
          <h4 className="text-center mt-4">Hasil</h4>

          <Alert hasil={this.state.hasil} note={this.state.note} />
        </div>
      </div>
    );
  }
}

export default Bmi;
