import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = "http://localhost/prueba_trade/public"
export default class Tienda extends Component {

  constructor(props){
    super(props);
    this.state = {
      tienda: [],
      textbusqueda: "",
      formNombre:"",
      formdescripcion:"",
      formvalor:"",
      formtienda:0,
      formNombre_pro:"",
      formimagen:null,
      formfechaapertura:"",
      formcamaracomercio:"",


    }


    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleChangecamaracomercio  = this.handleChangecamaracomercio.bind(this);
    this.handleChangefechaapertura  = this.handleChangefechaapertura.bind(this);
    this.handleChangetienda  = this.handleChangetienda.bind(this);
    this.handleChangeDescp  = this.handleChangeDescp.bind(this);
    this.handleChangeNombre_pro = this.handleChangeNombre_pro.bind(this);
    this.handleChangevalor  = this.handleChangevalor.bind(this);
    this.handleChangeimagen  = this.handleChangeimagen.bind(this);

}


  handleChangeNombre(event) {
    this.setState({formNombre: event.target.value});
  }

    handleChangecamaracomercio(event) {
        this.setState({formcamaracomercio: event.target.value});
    }

    handleChangefechaapertura(event) {
        this.setState({formfechaapertura: event.target.value});
    }

    handleChangetienda(event) {
        this.setState({formtienda: event.target.value});
    }
    handleChangeNombre_pro(event) {
        this.setState({formNombre_pro: event.target.value});
    }

    handleChangeDescp(event) {
        this.setState({formdescripcion: event.target.value});
    }

    handleChangetienda(event) {
        this.setState({formtienda: event.target.value});
    }
    handleChangevalor(event) {
        this.setState({formvalor: event.target.value});
    }
    handleChangeimagen(event) {
        this.setState({
            formimagen: URL.createObjectURL(event.target.files[0])
        })  }

    componentDidMount(){

        axios.get(baseUrl+ '/tienda/create').then(response=>{
        this.setState({tienda:response.data})
        }).catch(error=>{
        alert("Error "+error)
        })
    }

  render() {
    var renderList = Array.isArray(this.state.tienda) && this.state.tienda.map(data => {
        return (
            <tr>
            <td>{data.camaracomercio}</td>
            <td>{data.nombre}</td>
            <td>{data.fechaapertura}</td>
            <td>
            <button type="button" class="btn btn-danger" onClick={()=>this.showModalregistrar(data)}>
                Registrar producto
              </button>
            <button type="button" class="btn btn-primary col-md-3" data-toggle="modal" data-target="#productoModal"> Registrar producto</button>
                <button class="btn btn-info" onClick={()=>this.showModalEdit(data)}>Editar</button>
                <br/>
                <button class="btn btn-danger" onClick={()=>this.showModalDelete(data)}>Eliminar</button>
              </td>
          </tr>
        )
      });

          return (

            <div class="container">
              <h3>Tiendas</h3>
              <hr/>
              <button type="button" class="btn btn-primary col-md-3" data-toggle="modal" data-target="#tiendaModal">
                Registrar tienda
              </button>
              <table class="table table-bordered order-table ">
                <thead>
                  <tr>
                    <th>camara y comercio</th>
                    <th>tienda</th>
                    <th>fecha apertura</th>
                  </tr>
                </thead>
                <tbody id="bodytable">
                 {renderList}
                </tbody>
              </table>
              <form   method="POST" enctype="multipart/form-data">
              <input type = "hidden" name = "_token" value = "{{csrf_token}}"/>
            <div ref="putomodal" class="modal fade" id="tiendaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Formulario de tienda</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                     <label for="exampleInputEmail1">Nombre de la Tienda </label>
                     <input type="text" class="form-control" value={this.state.formNombre} onChange={this.handleChangeNombre}/>
                        </div>
                    <div class="form-group ">
                     <label for="exampleInputEmail1">numero de camara y comercio</label>
                     <input type = "text" class="form-control"  value={this.state.formcamaracomercio} onChange={this.handleChangecamaracomercio}></input>
                    </div>
                    <div class="form-group">
                     <label for="exampleInputEmail1">date</label>
                     <input type="date" class="form-control" value={this.state.formfechaapertura} onChange={this.handleChangefechaapertura} />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary"  onClick={()=>this.sendtienda()}>Guardar</button>
                  </div>
                </div>
              </div>
            </div>
        </form>
        <form method="POST" enctype="multipart/form-data" >
            <input type = "hidden" name = "_token" value = "{{csrf_token}}"/>
            <div class="modal fade" id="productoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Formulario de producto</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                    <label for="exampleInputEmail1">Nombre de producto </label>
                    <input type="text" class="form-control" value={this.state.formNombre_pro} onChange={this.handleChangeNombre_pro} />
                    </div>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Descripcion de producto</label>
                    <textarea class="form-control" rows="2" value={this.state.formdescripcion} onChange={this.handleChangeDescp}></textarea>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Precio</label>
                    <input type="number" class="form-control" value={this.state.formvalor} onChange={this.handleChangevalor} />
                    </div>
                    <div class="form-group">
                        <input type="file" onChange={this.handleChange}/>
                        <img src={this.state.file}/>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>

                    {
                    this.state.edit?
                    <button type="button" class="btn btn-primary" onClick={()=>this.sendNetworkUpdate()}>Actualizar</button>
                    :
                    <button type="button" class="btn btn-primary" onClick={()=>this.sendProduct()}>Guardar</button>
                    }
                </div>
                </div>
            </div>
            </div>
        </form>


            </div>

          );
      }
      showModalregistrar(data){
        //alert("mostrar modal "+JSON.stringify(data))
        this.setState({
          formtienda:data.camaracomercio,
          edit:true
        })
        $("#productoModal").modal("show");
      }


  showModalEdit(data){
    //alert("mostrar modal "+JSON.stringify(data))
    this.setState({
      formtienda:data.camaracomercio,
      edit:true
    })
    $("#productoModal").modal("show");
  }

  sendtienda(){

    const formData = new FormData()
    formData.append('nombre',this.state.formNombre)
    formData.append('camaracomercio',this.state.formcamaracomercio)
    formData.append('fechaapertura',this.state.formfechaapertura)

    axios.post(baseUrl+'/tienda',formData).then(response=>{

         if (response.data.success==true) {
           alert(response.data.message)
           // cargar datos de nuevo
           this.loadDataProduct()
           $("#tiendaModal").modal("hide");
         }

     }).catch(error=>{
       alert("Error "+error)
     })

  }
  sendProduct(){

    const formData_producto = new FormData()
    formData_producto.append('nombre',this.state.formNombre_pro)
    formData_producto.append('descripcion',this.state.formdescripcion)
    formData_producto.append('valor',this.state.formvalor)
    formData_producto.append('imagen',this.state.formimagen)
    formData_producto.append('tienda',this.state.formtienda)

    axios.post(baseUrl+'/producto',formData).then(response=>{

         if (response.data.success==true) {
           alert(response.data.message)
           // cargar datos de nuevo
           this.loadDataProduct()
           $("#productoModal").modal("hide");
         }

     }).catch(error=>{
       alert("Error "+error)
     })

  }

  sendNetworkUpdate(){

    const formData = new FormData()
    formData.append('nombre',this.state.formNombre_pro)
    formData.append('descripcion',this.state.formdescripcion)
    formData.append('valor',this.state.formvalor)
    formData.append('imagen',this.state.formimagen)
    formData.append('tienda',this.state.formtienda)

    axios.post(baseUrl+'/producto/{producto}',formData).then(response=>{

         if (response.data.success==true) {
           alert(response.data.message)
           // para cargar datos de nuevo
           this.loadDataProduct()
           // para cerrar el mod    al
           $("#productoModal").modal("hide");
         }

     }).catch(error=>{
       alert("Error 456"+error)
     })

}



  }

if (document.getElementById('tienda')) {
    ReactDOM.render(<Tienda />, document.getElementById('tienda'));
}
