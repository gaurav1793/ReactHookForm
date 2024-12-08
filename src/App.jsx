import { appendErrors, useForm} from'react-hook-form'
import './App.css'

function App() {
  //step 1
  const {
    register,
    handleSubmit,
    formState:{errors,isSubmitting},
  }=useForm();

  async function gk(data){
    await new Promise((resolve)=>setTimeout(resolve,5000)) 
    console.log(data);
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit(gk)}>

        <div>
          <label>first name</label>
          <input className={errors.first?"border": ""}
           {...register('first' , {required: true  ,
            maxLength:{value:6 , message:"veer ji your name is too big keep it in 6 characters"}
            })}
          />
          {errors.first && <p className='err-msg'>{errors.first.message}</p>}
        </div>

        <div>
          <label>last name</label>
          <input className={errors.last?"border": ""}{...register('last' , {required:true , minLength:{value:3 , message:"keep it short"}})}/>
          {errors.last && <p className='err-msg'>{errors.last.message}</p>}
        </div>
        <div>
          <label>age</label>
          <input/>
        </div>
        <input type='submit' disabled={isSubmitting}
        value={isSubmitting?"submitting":"submit"}/>
      </form>
    </>
  )
}

export default App





