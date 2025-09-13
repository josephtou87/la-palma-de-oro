export default function ProductCard({ producto, onAdd }){
  return (
    <div className="card">
      <img src={producto.image} alt={producto.nombre} style={{width:'100%', height:200, objectFit:'cover', borderRadius:8}} />
      <h3 style={{marginTop:12, marginBottom:6}}>{producto.nombre}</h3>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontWeight:700}}>${producto.precio}</div>
        <button className="btn" onClick={()=>onAdd(producto)}>Agregar</button>
      </div>
    </div>
  )
}
