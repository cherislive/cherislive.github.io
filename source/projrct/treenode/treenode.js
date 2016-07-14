/**
 * @fileoverview 可扩展的treeNode.
 * @author jiankangzhang
 */


(function(){
var TreeTip = function(element, attach) {
  $()
};

var TreeNode = function(nodeData, haschild) {
  this.nodeData = nodeData;
  this.nodeEl_;
  this.expandIcon;
  this.haschild = haschild;

  this.tiptimer_ = null;
  this.excelIcon_;
  this.expandIcon_;
};

TreeNode.prototype.render = function(parentNode) {
  this.createDom_();
  parentNode.appendChild(this.nodeEl_);
  var pThis = this;
  $(this.nodeEl_).bind('click', function(event){
    $(pThis).trigger(TreeStruct.EXPAND_EVENT);
  });
};

TreeNode.prototype.createDom_ = function() {
  var arrowEl = document.createElement('div');
  var textNode = document.createTextNode(this.nodeData);
  this.expandIcon = document.createElement('label');
  this.nodeEl_ = document.createElement('div');
  arrowEl.className = 'treecon-arrow';
  this.nodeEl_.className = 'treecon-itemcon';
  this.nodeEl_.appendChild(arrowEl);
  this.nodeEl_.appendChild(textNode);
  var pThis = this;
  $(this.nodeEl_).mouseover(function(){
    pThis.tryShowTip_();
  });
  $(this.nodeEl_).mouseleave(function(){
    pThis.tryHideTip_();
  });
  this.tooltip = document.createElement('div');
  this.tooltip.className = 'treetooltip';
  this.tooltip.innerHTML = this.nodeData + '的TIP';
  if (this.haschild)this.nodeEl_.appendChild(this.expandIcon);
};

TreeNode.prototype.cleanTipTimer_ = function() {
  if (this.tiptimer_) {
    clearTimeout(this.tiptimer_);
	this.tiptimer_ = null;
  }
};

TreeNode.prototype.tryShowTip_ = function() {
  this.cleanTipTimer_();
  var pThis = this;
  this.tiptimer_ = setTimeout(function(){
    pThis.cleanTipTimer_();
	var offset = $(pThis.nodeEl_).offset();
	$(pThis.tooltip).css({top:(offset.top+52)+'px',left:(offset.left+3)+'px'});
	document.body.appendChild(pThis.tooltip);
  }, 300);
};

TreeNode.prototype.tryHideTip_ = function() {
  this.cleanTipTimer_();
  var pThis = this;
  this.tiptimer_ = setTimeout(function(){
    pThis.cleanTipTimer_();
	if (pThis.tooltip.parentNode) {
	  pThis.tooltip.parentNode.removeChild(pThis.tooltip);
	}
  }, 200);
};

TreeNode.prototype.forcehidetip = function() {
  if (this.tooltip.parentNode) {
    this.tooltip.parentNode.removeChild(this.tooltip);
  }
};

/**
 * 获取节点的内容
 * @return {number}
 */
TreeNode.prototype.getElement = function() {
  return this.nodeEl_;
};

/**
 * 获取节点的内容
 * @return {number}
 */
TreeNode.prototype.getHeight = function() {
  return 48;
};

/**
 * 获取节点的内容
 * @param {boolean} expand
 */
TreeNode.prototype.setExpand = function(expand) {
  this.expanded_ = expand;
  this.expandIcon.innerHTML = this.expanded_ ? '-' : '+';
};

var TreeStruct = function(treeData) {
  /**
   * 树形节点的数据
   * @type {TreeData}
   */
  this.treeData = treeData;

  /**
   * 当前节点的子节点是否展开
   * @type {boolean}
   */
  this.expanded_ = true;

  /**
   * 孩子节点
   * @type {Array.<TreeStruct>}
   */
  this.children_ = [];

  /**
   * 当前元素
   * @type {Element}
   */
  this.element;

  /**
   * 子节点panel,用来做定位
   * @type {Element}
   * @private
   */
  this.childrenPanel_;

  /**
   * 子节点panel,用来放子节点
   * @type {Element}
   * @private
   */
  this.childrenCon_;

  /**
   * 引导线，会根据树的大小更新自己的高度和位置
   * @type {Element}
   * @private
   */
  this.childLine_;

  /**
   * 当前节点的内容
   * @type {TreeNode}
   * @private
   */
  this.treeNode;
};

/**
 * 创建当前节点的结构
 * @private
 */
TreeStruct.prototype.createDom_ = function() {
  this.childLine_ = document.createElement('div');
  this.childrenCon_ = document.createElement('div');
  this.childrenPanel_ = document.createElement('div');
  this.childLine_.className = 'treecon-childline';
  this.childrenCon_.className = 'treecon-childlist';
  this.childrenPanel_.className = 'treecon-childwarp';
  this.childrenPanel_.appendChild(this.childrenCon_);
  this.childrenPanel_.appendChild(this.childLine_);

  var treewarp = document.createElement('div');
  this.element = document.createElement('div');
  treewarp.className = 'treewarp';
  this.element.className = 'treecon';
  this.treeNode = new TreeNode(this.treeData.itemData, this.treeData.childItems && this.treeData.childItems.length > 0);
  this.treeNode.render(treewarp);
  this.treeNode.setExpand(this.expanded_);
  treewarp.appendChild(this.childrenPanel_);
  this.element.appendChild(treewarp);
};

/**
 * 创建树节点
 * @param {Element=} opt_parentNode 用来放树节点的容器，如果不填默认容器为body.
 */
TreeStruct.prototype.render = function(opt_parentNode) {
  this.createDom_();
  var parentNode = opt_parentNode ? opt_parentNode : document.body;
  parentNode.appendChild(this.element);
  if (!this.treeData.childItems || !(this.treeData.childItems.length > 0)) {
      return;
  }
  var pThis = this;
  for(var index = 0; index < this.treeData.childItems.length; index++) {
    var childNode = new TreeStruct(this.treeData.childItems[index]);
    $(childNode).bind(TreeStruct.EXPAND_EVENT, function(event) {
      $(pThis).trigger(TreeStruct.EXPAND_EVENT);
    });
    this.children_.push(childNode);
    childNode.render(this.childrenCon_);
  }
  
  $(this.treeNode).bind(TreeStruct.EXPAND_EVENT, function(){
    pThis.setExpand(!pThis.expanded_);
  });
};

/**
 * 返回当前节点内容的高度
 * @return {number}
 */
TreeStruct.prototype.getNodeItemHeight = function() {
  return this.treeNode.getHeight();
};

/**
 * 设置节点的展开收起状态.
 * @param {boolean} expand .
 */
TreeStruct.prototype.setExpand = function(expand) {
  if (this.expanded_ == expand) return;
  this.expanded_ = expand;
  this.treeNode.setExpand(this.expanded_);
  $(this).trigger(TreeStruct.EXPAND_EVENT);
};

/**
 * 获取当前节点树的高度,树的高度会根据子节点是否展开收起有关.
 * @return {number}
 */
TreeStruct.prototype.getViewHeight = function() {
  var nodeHeight = this.getNodeItemHeight();  
  if (!this.expanded_) {
    return nodeHeight + TreeStruct.PANEL_SEPRATELINE_HEIGHT;  
  }
  var childheight = 0;
  for (var index = this.children_.length - 1; index >=0 ;index--) {
    childheight += this.children_[index].getViewHeight();
  }
  return Math.max(nodeHeight, childheight) + TreeStruct.PANEL_SEPRATELINE_HEIGHT;
};

/**
 * 更新树的样式
 */
TreeStruct.prototype.updateStyle = function() {
  this.treeNode.forcehidetip();
  if (this.children_.length < 1) {
    $(this.childrenPanel_).css({'display' : 'none'});
    return;
  }
  var nodeHeight = this.getNodeItemHeight();
  var viewHeight = this.getViewHeight();
  if (this.expanded_) {
    var recordTop = 0;
    for (var index = 0; index < this.children_.length ;index++) {
      var childNode = this.children_[index];
      var childTop = recordTop + (childNode.getViewHeight() - nodeHeight) / 2;
      $(this.children_[index].element).css({'top' : childTop + 'px'});
      recordTop += childNode.getViewHeight();
      this.children_[index].updateStyle();
    }

    var splitelineheight = viewHeight - this.children_[0].getViewHeight() / 2
      - this.children_[this.children_.length - 1].getViewHeight() / 2 - 4;
    $(this.childLine_).css({'height': splitelineheight + 'px', 'top': (this.children_[0].getViewHeight()) / 2 + 'px'});
    $(this.childrenPanel_).css({'height': viewHeight + 'px', 'top': (nodeHeight - viewHeight) / 2 + 'px', '-webkit-transform': 'scale(1)'});
  } else {
    $(this.childrenPanel_).css({'-webkit-transform': 'scale(0)'});
  }
};

/**
 * 树展开关闭事件
 * @type {String}
 */
TreeStruct.EXPAND_EVENT = 'treeexpandevent';

/**
 * 子节点直接添加的padding间隔。
 * @type {number}
 */
TreeStruct.PANEL_SEPRATELINE_HEIGHT = 8;

window.yzmTreeStruct = TreeStruct;
window.initYzmTree = function(rawData) {
  var ins = new TreeStruct(_rawItemData);
  ins.render();
  ins.updateStyle();
  ins.element.style.top = (ins.getViewHeight() / 2 - 24) + 'px';
  $(ins).bind(TreeStruct.EXPAND_EVENT, function(){
    ins.updateStyle();
    ins.element.style.top = (ins.getViewHeight() / 2 - 24) + 'px';
      });
    }
})();