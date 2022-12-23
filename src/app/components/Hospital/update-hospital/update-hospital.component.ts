import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IHospitalDTO } from 'src/app/interfaces/IHospitalDTO';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.css']
})
export class UpdateHospitalComponent implements OnInit {
  hospital!: IHospitalDTO;
  idRecebido!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.idRecebido = Number(params.get('id'));
    });
   }

  ngOnInit(): void {
    this.hospital = {
      idHospital: this.idRecebido ?? 0,
      nome: '',
      cnpj: '',
      endereco: '',
      telefone: '',
      cnes: '',
      ativo: false
    }

    if (this.idRecebido) {
      this.http
        .get(`https://localhost:7114/UpdateHospital/${this.idRecebido}`)
        .subscribe((data) => {
          console.log(`Objeto recebido do banco: ${JSON.stringify(data)}`);
          this.hospital = data as IHospitalDTO;
        });
    }

  }


  salvar() {

    if (this.validarInformacoes()) {
      console.log(`Objeto para salvar: ${JSON.stringify(this.hospital)}`);

      if (this.hospital.idHospital == 0) {

        this.http.post('https://localhost:7114/CreateHospital', this.hospital)
          .subscribe((data) => {
            this.router.navigate(['GetAllHospital']);
          });

      } else {
        this.http.patch('https://localhost:7114/UpdateHospital', this.hospital)
          .subscribe((data) => {
            this.router.navigate(['GetAllHospital']);
          });
      }

    } else {
      console.log('Erro na validação');
      // TRATAMENTO DE ERRO
      // ALERTA
      // BORDA VERMELHA
    }
  }

  validarInformacoes(): boolean {
    if (this.hospital.nome == '') {
      return false;
    }
    return true;
  }

}




