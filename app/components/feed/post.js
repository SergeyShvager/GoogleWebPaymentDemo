import React from 'react';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';

import Badge from 'material-ui/Badge';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import {red500, red900 } from 'material-ui/styles/colors';
import moment from 'moment';

import { getTranslation } from '../../lib/localizer';

export default React.createClass({
    render() {
        const { content, author, published_at, likes, team_breadcrumb = [] } = this.props.post;

        const teamBreadcrumb = team_breadcrumb.map(b => b.title).join(' / ');
        const likesCount = likes ? likes.length : 0;
        const postContent = getTranslation(content);

        return (
            <Card style={{marginBottom: 10}}>
                <CardHeader
                    title={author.name}
                    avatar={author.userpic}
                    subtitle={moment(published_at).format('ll')}
                />
                <CardTitle title={postContent.title} subtitle={teamBreadcrumb}/>
                <CardText>{postContent.intro}</CardText>
                <CardActions>
                    <Badge
                        badgeContent={likesCount}
                        secondary
                        badgeStyle={{top: 12, right: 12}}
                    >
                        <IconButton tooltip="Like">
                            <FavoriteIcon hoverColor={red500} />
                        </IconButton>
                    </Badge>
                </CardActions>
            </Card>
        );
    }
})