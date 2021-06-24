import React, { useEffect, useState } from 'react'
import TableResults from '../tableResults'
import styles from './styles.module.css'
import axios from 'axios'



export default function Main() {

    const [data, setData] = useState([])
    const [dataFiltered, setDataFiltered] = useState([])
    const [isFiltered, setIsFiltered] = useState(false)

    useEffect(() => {
        async function pegaDados() {
            const { data } = await axios.get('https://warren-transactions-api.herokuapp.com/api/transactions')
            setData(data)
        }
        pegaDados()
    }, [])

    function copyDataSelected(selection) {
        setDataFiltered([])
        const newItem = []
        data.forEach(item => {
            if (selection === item.status) {
                newItem.push(item)
            }
        })
        setDataFiltered(newItem)
    }

    function copyDataSearching(search) {
        setDataFiltered([])
        const newItem = [];
        const regExp = new RegExp(search, "gi")

        data.forEach(item => {
            if (regExp.test(item.title)) {
                newItem.push(item)
            }
        })
        setDataFiltered(newItem)
    }

    return (
        <div className={styles.main}>
            <h2>Transações </h2>
            <div className={styles.inputsField}>
                <input
                    placeholder="Pesquise aqui"
                    type="text"
                    onChange={(event) => {
                        setIsFiltered(true)
                        copyDataSearching(event.target.value)
                    }} />

                <select onChange={(event) => {
                    setIsFiltered(true)
                    copyDataSelected(event.target.value)
                }}>
                    <option selected disabled> Select </option>
                    <option> created </option>
                    <option> processing </option>
                    <option> processed </option>

                </select>
                <button onClick={() => setIsFiltered(false)}>Clear Filters</button>
            </div>

            <TableResults data={isFiltered === true ? dataFiltered : data} />
        </div>
    )
}