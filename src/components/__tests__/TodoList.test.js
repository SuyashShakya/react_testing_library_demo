import {render, screen, fireEvent} from '@testing-library/react';
import TodoList from '../TodoList';

describe('should render Heading no matter what', () => {
    it('should render main Heading no matter what', async() => {
        render(<TodoList />)
        const mainHeadingElement = screen.getByText('Todo List');
    
        expect(mainHeadingElement).toBeInTheDocument();
    })
    it('should render sub Heading no matter what', async() => {
        render(<TodoList />)
        const subHeadingElement = screen.getByText('A simple React Todo List App');
    
        expect(subHeadingElement).toBeInTheDocument();
    })  
})

describe('text input and button should sync', () => {
    it('text should be added in input when typed', async() => {
        render(<TodoList />)
        const inputElement = screen.getByPlaceholderText('New Todo');
        fireEvent.change(inputElement,{target: {value: 'Clean your Pc'}})
        expect(inputElement.value).toBe("Clean your Pc");
    })

    it('input should be empty after add button is clicked', async() => {
        render(<TodoList />)
        const inputElement = screen.getByPlaceholderText('New Todo');
        const buttonElement = screen.getByRole('button', {name: 'Add Todo'})
        fireEvent.change(inputElement,{target: {value: 'Clean your Pc'}})
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
    })
})

describe('todo after addition must appear on the list', () => {
    it('text should be added in input when typed', async() => {
        render(<TodoList />)
        const inputElement = screen.getByPlaceholderText('New Todo');
        const buttonElement = screen.getByRole('button', {name: 'Add Todo'})
        fireEvent.change(inputElement,{target: {value: 'Clean your Pc'}})
        fireEvent.click(buttonElement)
        const listElement = screen.getByText('Clean your Pc');
        expect(listElement).toBeInTheDocument();
    })  
})



