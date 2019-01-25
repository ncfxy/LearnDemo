'use strict';

wap.core.ui.SocialLikeButtonTemplate.createDefaultDom = function (props) {
    if (!props['vo']) {
        props['vo'] = {};
    }

    var dataId_ = props['vo']['dataId'] ? props['vo']['dataId'] : props['dataId'];
    var serviceId_ = props['vo']['serviceId'] ? props['vo']['serviceId'] : props['serviceId'];
    var componentId_ = "social-like-button-component-" + dataId;
    var type_ = props['type'] ? props['type'] : 'default';
    var isButton_ = type_ === 'button';
    var innerElement = void 0;
    if (type_ === 'button') {

        innerElement = React.createElement(
            'button',
            { className: 'social-like-button-button-version' },
            React.createElement('i', { 'class': 'social-like-button-button-version-icon wap-icon-thumbs-up {$showThumb_ ? \'\' : \'hidden\'}' }),
            React.createElement(
                'span',
                { 'class': 'social-like-button-button-version-label label-like {(not isNonnull($vo_) ? $liked_ : $vo_.liked)? \'hidden\':\'\'}' },
                '{{like}}'
            ),
            React.createElement(
                'span',
                { 'class': 'social-like-button-button-version-label label-unlike {(not isNonnull($vo_) ? $liked_ : $vo_.liked)? \'\':\'hidden\'}' },
                '{{unlike}}'
            )
        );
    }
    return React.createElement(
        'div',
        { id: componentId_, 'data-id': dataId_, 'data-service-id': serviceId_ },
        innerElement
    );
};

