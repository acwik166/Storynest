import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { io, Socket } from 'socket.io-client'
import ReactQuill from 'react-quill';
import Quill from 'quill'
import 'react-quill/dist/quill.snow.css';

export default function TextEditor() {
    const [value, setValue] = useState('');
    const [socket, setSocket] = useState()
    const [quill, setQuill] = useState()

    const { id: documentId } = useParams()

    const toolbarOptions = [
        [{ header: [1, 2, 3, false] }],
        [{ font: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ size: [] }],
        [{ color: [] }, { background: [] }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ align: [] }],
        ['clean']
    ]

    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return
        wrapperRef.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        const q = new Quill(editor, { theme: 'snow', modules: { toolbar: toolbarOptions } })
        q.disable()
        q.setText('Loading...')
        setQuill(q)
    }, [])

    useEffect(() => {
        if (socket == null || quill == null) return

        socket.once('load-document', (document) => {
            quill.setContents(document)
            quill.enable()
        })

        socket.emit('get-document', documentId)

    }, [socket, quill, documentId])

    useEffect(() => {
        if (socket == null || quill == null) return

        const interval = setInterval(() => {
            socket.emit('save-document', quill.getContents())
        }, 300000)

        return () => {
            clearInterval(interval)
        }
    }, [socket, quill])

    useEffect(() => {
        const s = io('http://localhost:3000')
        setSocket(s)

        return () => {
            s.disconnect()
        }
    }, [])


    useEffect(() => {
        if (socket == null || quill == null) return

        const handler = (delta, oldDelta, source) => {
            console.log(delta)
            if (source !== 'user') return
            socket.emit('send-changes', delta)
        }

        quill.on('text-change', handler)

        return () => {
            quill.off('text-change', handler)
        }

    }, [socket, quill])

    useEffect(() => {
        if (socket == null || quill == null) return

        const handler = (delta) => {
            quill.updateContents(delta)
        }

        socket.on('receive-changes', handler)
    })


    return (
        <div className='container' ref={wrapperRef}>

        </div >
    )
}
