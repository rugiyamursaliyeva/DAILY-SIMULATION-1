import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsThunk, getProductsThunk, postProductsThunk } from '../../redux/reducers/productSlice';

const Admin = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
    initialValues: {
       name: '',
       price: '',
       image: '',
     },
    onSubmit: values => {
       dispatch(postProductsThunk(values))
       dispatch(getProductsThunk())
    },
   });

    const data = useSelector(state => state.product.product)
    const loading = useSelector(state => state.product.loading)
    const error = useSelector(state => state.product.error)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    if (loading) return <span>Loading...</span>
    if (error) return <span>Probelm Deteced While Loading Process</span>

    const deleteitem = (id) => {
        dispatch(deleteProductsThunk(id))
    }
  return (
    <div>
   <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name">Name</label>
       <input
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <label htmlFor="price">Price</label>
       <input
         name="price"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <label htmlFor="image">Image</label>
       <input
         name="image"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.image}
       />
       <button type="submit">Submit</button>
     </form>
   {data && data.map(item => {
                return (
                    <div>
                        <img src={item.image} alt="" />
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <button onClick={() => deleteitem(item._id)}>Delete</button>
                    </div>
                )
            })}
    </div>
    )
}

export default Admin