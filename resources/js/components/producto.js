import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = "http://localhost/proyecto-react/public"
export default class Producto extends Component {

  constructor(props){
    super(props);
    this.state = {
      producto: [],
      formtienda:0,
      productoBackup:[],
      textbusqueda:"",
      formdescripcion:"",
      formvalor:"",
      file: null,
      formNombre_pro:"",
      formimagen:"",
      edit:false

    }


    this.handleChangeDescp  = this.handleChangeDescp.bind(this);
    this.handleChangeNombre_pro = this.handleChangeNombre_pro.bind(this);
    this.handleChangevalor  = this.handleChangevalor.bind(this);
    this.handleChangeimagen  = this.handleChangeimagen.bind(this);
    this.handleChange = this.handleChange.bind(this)


  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }



  componentDidMount(){

    axios.get(baseUrl+ '/producto/create').then(response=>{
      this.setState({producto:response.data,productoBackup:response.data})
    }).catch(error=>{
      alert("Error "+error)
    })
 }


  filter(event){

    var text = event.target.value
    const itemData = this.state.productoBackup
    const newData = data.filter(function(item){
        return itemData.indexOf(text) > -1
    })
      this.setState({
        producto: newData,
        text: text,
    })
  }

  render() {
    var listdata = Array.isArray(this.state.producto) && this.state.producto.map(data => {
        return (
            <tr>
            <td>{data.SKU}</td>
            <td>{data.nombre}</td>
            <td>{data.descripcion}</td>
            <td>{data.valor}</td>
            <td>{data.imagen}</td>
            <td>
                <button class="btn btn-info" onClick={()=>this.showModalEdit(data)}>Editar</button>

                <button class="btn btn-danger " onClick={()=>this.showModalDelete(data)}>Eliminar</button>
              </td>
          </tr>
        )
      });

        return (

          <div class="container">
            <h3> lista productos</h3>
            <hr/>
            <input class="form-control"  value={this.state.text} placeholder =  "Buscar por camara y comercio" onChange={(text) => this.filter(text)}/>
            <button type="button" class="btn btn-primary col-md-4" data-toggle="modal" data-target="#ProductoModal">
                Registrar Producto
              </button>
            <table class="table table-bordered order-table ">
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>Producto</th>
                  <th>Descripcion</th>
                  <th>valor</th>
                    <th>imagen</th>
                </tr>
              </thead>
              <tbody id="bodytable">
               {listdata}
              </tbody>
            </table><form method="POST" enctype="multipart/form-data" >
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
                    <button type="button" class="btn btn-primary" onClick={()=>this.sendProduct()}>Guardar</button>

                </div>
                </div>
            </div>
            </div>
        </form>
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

                    <button type="button" class="btn btn-primary" onClick={()=>this.sendNetworkUpdate()}>Actualizar</button>

                </div>
                </div>
            </div>
            </div>
        </form>

            <div class="modal fade" id="productoModalDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">

            <div class="modal-content">

                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Eliminar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div class="modal-body">
                <p>Esta seguro desea de eliminar un regsitro?</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary" onClick={()=>this.sendNetworkDelete()}>Eliminar</button>
                </div>
            </div>

            </div>
            </div>
          </div>

        );

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
        this.setState({formimagen: event.target.value});
      }
    showModalEdit(data){
        //alert("mostrar modal "+JSON.stringify(data))
        this.setState({
          formtienda:data.tienda,
          formNombre_pro:data.nombre,
          formdescripcion:data.descripcion,
          formvalor: data.valor,
          formimagen: data.imagen,
          edit:true
        })
        $("#productoModal").modal("show");
      }


      sendNetworkUpdate(){

        const formData = new FormData()
        formData.append('nombre',this.state.formNombre_pro)
        formData.append('descripcion',this.state.formdescripcion)
        formData.append('valor',this.state.formvalor)
        formData.append('imagen',this.state.formimagen)
        formData.append('tienda',this.state.formtienda)

        axios.post(baseUrl+'/producto/edit',formData).then(response=>{

             if (response.data.success==true) {
               alert(response.data.message)

               // para cerrar el mod    al
               $("#productoModal").modal("hide");
             }

         }).catch(error=>{
           alert("Error 456"+error)
         })

   }
   sendNetworkDelete(){

    const formData = new FormData()
    formData.append('id',this.state.formtienda)

    axios.post(baseUrl+'/producto/{delete}',formData).then(response=>{

         if (response.data.success==true) {
           alert(response.data.message)

           $("#productoModalDelete").modal("hide");
         }

     }).catch(error=>{
       alert("Error "+error)
     })

  }
   showModalDelete(data){
    // id seleccionado para eliminar
    this.setState({ idProducto:data.idProducto })
    $("#productoModalDelete").modal("show");
  }

}


if (document.getElementById('producto')) {
    ReactDOM.render(<Producto />, document.getElementById('producto'));
}
