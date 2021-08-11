import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{ nickname: '에옹' }, { nickname: '바보' }, { nickname: '노드버드' }];
    const followingList = [{ nickname: '에옹' }, { nickname: '바보' }, { nickname: '노드버드' }];
    return (
        <>
            <Head>
                <title>My Profile | Nodebird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="Following List" data={followingList} />
                <FollowList header="Follower List" data={followerList} />
            </AppLayout>
        </>
    )
};

export default Profile;