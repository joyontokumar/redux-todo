import { Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { errorNotification, successNotification } from '../common/notification';
const { Option } = Select;
const Posts = () =>{
    const[items, setItems] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        const fetchPost = () => {
            axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(res => {
                let output = res.data
                setItems(output)
            })
        }
        fetchPost()
    }, [])

    const handleChange = async(v) => {
        // console.log('mydata', mydata);
        try {
            const mydata = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${v}`)
            let response = await mydata.data
            setItems(response)
            successNotification('success', 'filtering data')
        } catch (error) {
            errorNotification('error', error)
        }
    }
    return (
        <div className="section-area">
            <div className="content">
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="lucy">item one</Option>
                    <Option value="1">item 1</Option>
                    <Option value="2">item 2</Option>
                    <Option value="3">item 3</Option>
                </Select>
            </div>
            <div className="posts-content">
                <div className="post-content-wrapper">
                    {items.map((single, i) => (
                        <div className="single-posts" key={i}>
                            <h3>{single.title}</h3>
                            <p>{single.body}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
            <div className="diable-enable-button">
                <button disabled={value==='lucy'}>This Is Button</button>
                {console.log(value)}
            </div>
        </div>
    )
}

export default Posts
