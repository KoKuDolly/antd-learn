import { Tree } from 'antd';

const { TreeNode } = Tree;

class MyTree extends React.Component {
  render() {
    return (
      <div>
        <Tree>
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="leaf" key="0-0-0" />
            <TreeNode title="leaf" key="0-0-1" />
          </TreeNode>
        </Tree>
      </div>
    );
  }
}

export default MyTree;
