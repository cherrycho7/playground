import styled from "styled-components";

const TodoItem = ({todo, onCompleted, onDeleted}) => {

  const { uuid, text, isCompleted, isDeleted } = todo
  const completedClick = (e) => {
    onCompleted(e.currentTarget.id);
  }
  const deletedClick = (e) => {
    onDeleted(e.currentTarget.id);
  }

  return <Style isCompleted={isCompleted} isDeleted={isDeleted}>
    <div className="left">
      <div className='check' id={ uuid } onClick={completedClick}>
        <div className="circle">{isCompleted ? '완료' : '미완료'}</div>
      </div>
      <div className="text">{ text }</div>
    </div>
    <div className="right" id={ uuid } onClick={deletedClick}>
      <div className={isDeleted ? 'btnRestore' : 'btnDelete'}>{isDeleted ? '복구' : '삭제'}</div>
    </div>
  </Style>
}

const Style = styled.div`
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);
  
  .left {
    display: flex;
    gap: 16px;
    align-items: center;
    
    .check {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      border: ${({isDeleted}) => isDeleted ? 'none' : '1px solid #ddd'};
      
      .circle {
        display: ${({isCompleted, isDeleted}) => (isCompleted && !isDeleted) ? 'block' : 'none'};
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background-color: #426EFF;
        text-indent: -9999px;
      }
    }
    
    .text {
      font-size: 16px;
      color: ${({isCompleted, isDeleted}) => (isCompleted || isDeleted) ? 'rgba(0,0,0,0.4)' : '#000'};
      text-decoration: ${({isDeleted}) => isDeleted ? 'line-through' : 'none'};
    }
  }
  
  .right {
    font-size: 14px;
    
    .btnDelete {
      color: #ff0000;
    }

    .btnRestore {
      color: #0047FF;
    }
  }
`
export default TodoItem;