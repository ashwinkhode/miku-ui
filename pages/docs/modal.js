import React from 'react'
import Layout from '../../components/Layout'

const Modal = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Modal
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          A modal is a dialog box/popup window that is displayed on top of the current page.
            </p>
      </div>
      <div className='my-4'>
        <div className="modal">
          <div className="modal-title">
            <h4>Delete Account ?</h4>
          </div>
          <div className="modal-body">
            All your data will be wiped. This action cannot be undone.
      </div>
          <div className="modal-footer">
            <button className="btn btn-outline btn-sm">Cancel</button>
            <button className="btn btn-solid btn-sm">Confirm</button>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Modal
