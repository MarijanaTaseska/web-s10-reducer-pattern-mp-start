import React,{useReducer} from 'react' // 👈 you'll need the reducer hook

// 👇 these are the types of actions that can change state
const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_FORM'

// 👇 create your initial state object here
const iniitialState ={
authorName:'',
quoteText:''
}

// 👇 create your reducer function here
const reducer = (state,action)=>{
  switch(action.type){
    case CHANGE_INPUT:{
      const {name, value} = action.payload
      return {...state,[name]:value}
    }
    case RESET_FORM:{
      return {authorName:'',quoteText:''}
    }
    default:{
      return state
    }
  }
}

export default function TodoForm({createQuote}) {
  // 👇 use the reducer hook to spin up state and dispatch
const [state,dispatch] = useReducer(reducer,iniitialState)
  const onChange = ({target:{name,value}}) => {
    dispatch({type:CHANGE_INPUT, payload:{name,value}})
    // 👇 implement
  }
  const resetForm = () => {
    dispatch({type:RESET_FORM})
    // 👇 implement
  }
  const onNewQuote = (evt) => {
    // 👇 implement
    evt.preventDefault()
    resetForm()
    const {authorName,quoteText} = state
    createQuote({authorName,quoteText})
  }

  // 👇 some props are missing in the JSX below:
  return (
    <form id="quoteForm" onSubmit={onNewQuote}>
      <h3>New Quote Form</h3>
      <label><span>Author:</span>
        <input
        value={state.authorName}
          type='text'
          name='authorName'
          placeholder='type author name'
          onChange={onChange}
        />
      </label>
      <label><span>Quote text:</span>
        <textarea
          value={state.quoteText}
          type='text'
          name='quoteText'
          placeholder='type quote'
          onChange={onChange}
        />
      </label>
      <label><span>Create quote:</span>
        <button
          role='submit'
        >DO IT!</button>
      </label>
    </form>
  )
}
