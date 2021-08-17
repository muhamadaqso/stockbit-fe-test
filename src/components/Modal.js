import emptyImg from '../assets/img/empty-img.jpeg';

const Modal = ({data}) => {
    return (
        <div className="modal fade" id="ModalGeneral" tabIndex="-1" aria-labelledby="ModalGeneralLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="ModalGeneralLabel">Image Detail</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img className="w-100" 
                    src={data && data!== 'N/A'?data:emptyImg} alt="detail image" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;