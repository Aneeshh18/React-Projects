import './App.css';
import Header from './Header';
import { Todos } from './Todos';
import { Footer } from './Footer';
import { AddTodo } from './AddTodo';
import { About } from './About';
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const onDelete = (todo) => {
        console.log("i am delete")
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
        console.log("deleted", todos)
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const addTodo = (title, desc) => {
        console.log("i m adding this todo", title, desc)
        let sno;
        if (todos.length === 0) {
            sno = 0;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo);
    }


    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <>
            <Router>
                <Header title="My Todos List" />
                <Switch>
                    <Route exact path="/" render={() => {
                        return (
                            <>
                                <AddTodo addTodo={addTodo} />
                                <Todos todos={todos} onDelete={onDelete} />
                            </>)
                    }}>
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;