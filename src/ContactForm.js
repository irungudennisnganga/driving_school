import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [tel, setTel] = useState('');
    const [agreed_amount, setAgreedAmount] = useState('');
    const [amount_paid, setAmountPaid] = useState('');
    const [balance, setBalance] = useState('');
    const [date, setDate] = useState('');
    const [reference_no, setReferenceNumber] = useState('');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxdO6PTGxBzt5oiFASblgV46j7uIrTg4Q2BIlRjob_3II8gj9iJEfAyC6kYPLYJMExy/exec'; // Replace with your Google Script URL

    function notify() {
        toast("Student Registration Completed!");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('Name', name);
        form.append('ID', id);
        form.append('TEL', tel);
        form.append('Agreed amount', agreed_amount);
        form.append('AMOUNT PAID', amount_paid);
        form.append('Balance', balance);
        form.append('Reference NO', reference_no);
        form.append('Date', date);

        fetch(scriptURL, {
            method: 'POST',
            body: form,
        })
            .then((response) => {
                notify();
                // Reset form fields
                setName('');
                setId('');
                setTel('');
                setAgreedAmount('');
                setAmountPaid('');
                setBalance('');
                setReferenceNumber('');
                setDate('');
            })
            .catch((error) => {
                console.error('Error!', error.message);
            });
    };

    return (
        <div className="container mx-auto mt-12 bg-gray-100 rounded-md shadow-md p-8">
            <ToastContainer />
            <form autoComplete='off' onSubmit={handleSubmit} className='flex flex-col'>
                <label className='text-gray-700 text-sm font-bold mb-2'>Name</label>
                <input
                    type='text'
                    name='Name'
                    placeholder='Enter Name'
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='input-field'
                />
                <br /><br />
                <label className='text-gray-700 text-sm font-bold mb-2'>Telephone Number</label>
                <input
                    type='tel'
                    name='TEL'
                    placeholder='Enter Phone Number'
                    required
                    onChange={(e) => setTel(e.target.value)}
                    value={tel}
                    className='input-field'
                />
                <br /><br />
                <label className='text-gray-700 text-sm font-bold mb-2'>ID</label>
                <input
                    type='number'
                    name='ID'
                    placeholder='Enter ID'
                    required
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                    className='input-field'
                />
                <br /><br />
                <label className='text-gray-700 text-sm font-bold mb-2'>Agreed Amount</label>
                <input
                    type='number'
                    name='Agreed amount'
                    placeholder='Enter Agreed Amount'
                    required
                    onChange={(e) => setAgreedAmount(e.target.value)}
                    value={agreed_amount}
                    className='input-field'
                />
                <br /><br />
                <label className='text-gray-700 text-sm font-bold mb-2'>Amount Paid</label>
                <input
                    type='number'
                    name='AMOUNT PAID'
                    placeholder='Enter Amount Paid'
                    required
                    onChange={(e) => setAmountPaid(e.target.value)}
                    value={amount_paid}
                    className='input-field'
                />
                <br /><br />
                <label className='text-gray-700 text-sm font-bold mb-2'>Balance</label>
                <input
                    type='number'
                    name='Balance'
                    placeholder='Enter Balance'
                    required
                    onChange={(e) => setBalance(agreed_amount - amount_paid)}
                    value={balance}
                    className='input-field'
                />
                <br /><br />
                <label className='text-gray-700 text-sm font-bold mb-2'>Reference No</label>
                <input
                    type='text'
                    name='Reference NO'
                    placeholder='Enter Ref No'
                    required
                    onChange={(e) => setReferenceNumber(e.target.value)}
                    value={reference_no}
                    className='input-field'
                />
                <br /><br />
                <label className='text-gray-700 text-sm font-bold mb-2'>Date</label>
                <input
                    type='date'
                    name='Date'
                    placeholder='Enter Date'
                    required
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    className='input-field'
                />
                <br /><br />
                <div>
                    <button type='submit' className='button '>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
