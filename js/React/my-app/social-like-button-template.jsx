


wap.core.ui.SocialLikeButtonTemplate.createDefaultDom = function(props){
    if(!props['vo']){
        props['vo'] = {};
    }

    let dataId_ = props['vo']['dataId'] ? props['vo']['dataId'] : props['dataId'];
    let serviceId_ = props['vo']['serviceId'] ? props['vo']['serviceId'] : props['serviceId'];
    let componentId_ = "social-like-button-component-" + dataId;
    let type_ = props['type'] ? props['type']: 'default';
    let isButton_ = type_ === 'button';
    let innerElement;
    if(type_ === 'button'){

        innerElement = 
            <button className="social-like-button-button-version" >
                <i class="social-like-button-button-version-icon wap-icon-thumbs-up {$showThumb_ ? '' : 'hidden'}" >
                </i>
                <span class="social-like-button-button-version-label label-like {(not isNonnull($vo_) ? $liked_ : $vo_.liked)? 'hidden':''}" >
                    {'{{like}}'}
                </span>
                <span class="social-like-button-button-version-label label-unlike {(not isNonnull($vo_) ? $liked_ : $vo_.liked)? '':'hidden'}" >
                    {'{{unlike}}'}
                </span>
            </button>
    }
    return (
        <div id={componentId_} data-id={dataId_} data-service-id={serviceId_} >
            {innerElement}
        </div> 
    )
}