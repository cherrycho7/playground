import styled from "styled-components";

const TodoItem = ({todo}) => {

  return <Style>
    <div className={'left ' + (todo.isDeleted ? 'del' : '')}>
      <div className='check'>
        { todo.isCompleted && <div className="circle"></div> }
      </div>
      <div className={ todo.isCompleted ? 'fin text' : 'text' }>
        { todo.text }
      </div>
    </div>
    <div className="right">
      <div className="btnDelete" hidden={todo.isDeleted}>삭제</div>
      <div className={'btnRestore ' + (todo.isDeleted ? 'btnRestore' : '')} hidden={!todo.isDeleted}>복구</div>
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
      border: 1px solid #ddd;
      
      .circle {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background-color: #426EFF;
      }
    }
    
    .text {
      font-size: 16px;
      color: #000;
      &.fin {
        color: rgba(0,0,0,0.4);
      }
    }
    
    &.del {
      .check {
        border: none;
      }
      
      .text {
        color: rgba(0,0,0,0.4);
        text-decoration: line-through;
      }
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