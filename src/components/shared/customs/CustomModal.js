import { Modal, Button } from "rsuite";

const CustomModal = ({
  children,
  title,
  open,
  onCloseHandler,
  size,
  btnActionPrimary = 'Text Default',
  btnActionSecondary,
  modalType = "submit",
  doAction,
  formId,
  showButtons = true,
  className = "",
  style = {}
}) => {
  return (
    <Modal
      backdrop="static"
      keyboard={false}
      open={open}
      onClose={onCloseHandler}
      className={className}
      size={size? size : null}
      style={style}
    >
      <Modal.Header>
        <Modal.Title className="fontSizeTitleModal">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-1">
        {children}
      </Modal.Body>
      <Modal.Footer>
        {showButtons ? (
          <>
            <Button onClick={onCloseHandler} appearance="subtle" className="btnSecondary poppins">
              Cancelar
            </Button>
            <Button
              type={modalType != "submit" ? "button" : "submit"}
              onClick={() => modalType != "submit" ? doAction() : ""}
              form={formId} className="btnPrimary poppins">
              {btnActionPrimary}
            </Button>
          </>
        ) : (
          <></>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;