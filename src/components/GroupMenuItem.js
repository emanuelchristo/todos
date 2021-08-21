
import '../styles/GroupMenuItem.css'

function GroupMenuItem({groupName, color}) {
  return (
    <div className="group-menu-item">
      <span className={`iconify folder-icon ${color}-color`} data-icon="mdi:folder"></span>
      {groupName}
    </div>
  )
}

GroupMenuItem.defaultProps = {
  color: "yellow"
}

export default GroupMenuItem
