import { createStore, combineReducers, applyMiddleware } from 'redux'

// Reducers
import user from "./_reducers/user"
import room from "./_reducers/room"
import checkin from "./_reducers/checkin"
import customer from "./_reducers/customer"

// Middlewares
import { promise } from './middlewares' 

const reducers = combineReducers({
  user,
  customer,
  checkin,
  room
})

const store = createStore(
  reducers, 
  applyMiddleware(promise)
)

export default store