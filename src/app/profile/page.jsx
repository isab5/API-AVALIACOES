"use client";

import styles from './Profile.module.css';
import { Button, Card, Flex, Typography} from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return  (
        <Card className={styles.card}>
            <Flex justify="space-between">
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/cachorro.jpg"
                        alt="Nome do cachorro" fill  className={styles.image}
                    />
                </div>
                    <Flex vertical align ="flex-end" justify="space-around">
                        <div>
                            <Typography.Title level={3}>Cachorro Salsicho</Typography.Title>
                            <Typography.Title level={5} type ="success">
                                Mockup Front Exam
                            </Typography.Title>
                            <Typography.Paragraph>
                                Projeto desenvolvido usando:
                            </Typography.Paragraph>
                            <ul className={styles.list}>
                                <li>NextJS</li>
                                <li>Axios</li>
                                <li>Ant Design</li>
                                <li>SessionStorage</li>
                                <li>Toastify</li>
                                <li>CSS Modules</li>
                                <li>Hook</li>
                                <li>PreLoad</li>
                                <li>PreFetch</li>
                                <li>Link / Next</li>
                                <li>Image / Next </li>
                                <li>NodeJS</li>
                                <li>Muito amor 💖</li>
                            </ul>
                        </div>
                        <Link href="/alunos" prefetch>
                        <Button type="primary" justify="center" className={styles.button}>
                            Acessar minha API GET via Axios
                        </Button>
                        </Link>
                    </Flex>
            </Flex>
        </Card>
    )
}