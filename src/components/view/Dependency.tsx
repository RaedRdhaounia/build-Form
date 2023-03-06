import { DependencyP } from "@/types/types"

function Dependency({title, Icon, description}: DependencyP) {
  return(
    <li className="flex gap-x-3">
      <Icon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
      <span>
        <strong className="font-semibold text-gray-900">
          {title}
        </strong>
        {description}
      </span>
    </li>
  )
}

export default Dependency